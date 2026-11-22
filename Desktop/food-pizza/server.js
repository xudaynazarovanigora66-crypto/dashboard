const http = require("node:http");
const { existsSync } = require("node:fs");
const { readFile } = require("node:fs/promises");
const path = require("node:path");

if (existsSync(path.join(__dirname, ".env")) && typeof process.loadEnvFile === "function") {
  process.loadEnvFile(path.join(__dirname, ".env"));
}

const port = Number(process.env.PORT || 3000);
const maxBodyBytes = 16 * 1024;
const allowedStaticRoots = new Set(["pages", "partials", "js", "styles", "images", "data"]);
const products = require("./data/products.json");
const productsById = new Map(products.map((product) => [product.id, product]));
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml"
};

function sendJson(response, status, body) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff"
  });
  response.end(JSON.stringify(body));
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    let size = 0;
    let tooLarge = false;
    request.setEncoding("utf8");
    request.on("data", (chunk) => {
      size += Buffer.byteLength(chunk);
      if (size > maxBodyBytes) {
        tooLarge = true;
        request.resume();
        return;
      }
      if (!tooLarge) body += chunk;
    });
    request.on("end", () => {
      if (tooLarge) reject(Object.assign(new Error("Request body is too large."), { status: 413 }));
      else resolve(body);
    });
    request.on("error", reject);
  });
}

function cleanText(value) {
  return value.trim().replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ");
}

async function handleContact(request, response) {
  if (!request.headers["content-type"]?.includes("application/json")) {
    return sendJson(response, 415, { error: "Expected a JSON request." });
  }
  let data;
  try {
    data = JSON.parse(await readRequestBody(request));
  } catch (error) {
    return sendJson(response, error.status || 400, { error: "Invalid request body." });
  }
  if (!data || typeof data !== "object" || Array.isArray(data) ||
      typeof data.name !== "string" || typeof data.phone !== "string" ||
      typeof data.message !== "string") {
    return sendJson(response, 400, { error: "Please complete all fields." });
  }
  const name = cleanText(data.name);
  const phone = cleanText(data.phone);
  const message = cleanText(data.message);
  if (!name || name.length > 100 || !message || message.length > 3000 ||
      !/^[+()\d\s.-]{7,40}$/.test(phone) || phone.replace(/\D/g, "").length < 7) {
    return sendJson(response, 400, { error: "Please check the contact details." });
  }
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim() || "8983060286";
  if (!token) {
    return sendJson(response, 503, { error: "Telegram bot token is not configured." });
  }
  const language = data.language === "ru" ? "ru" : "uz";
  const text = [
    language === "ru" ? "Новое сообщение с сайта" : "Yangi aloqa xabari",
    "",
    `${language === "ru" ? "Имя" : "Ism"}: ${name}`,
    `${language === "ru" ? "Телефон" : "Telefon"}: ${phone}`,
    "",
    message
  ].join("\n");
  try {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
      signal: AbortSignal.timeout(10000)
    });
    if (!telegramResponse.ok) {
      const details = await telegramResponse.text();
      console.error(`Telegram Bot API returned ${telegramResponse.status}: ${details}`);
      return sendJson(response, 502, { error: "Telegram rejected the message." });
    }
  } catch (error) {
    console.error("Could not reach the Telegram Bot API:", error.message);
    return sendJson(response, 502, { error: "Could not send the message. Please try again." });
  }
  return sendJson(response, 200, { ok: true });
}

async function handleOrder(request, response) {
  if (!request.headers["content-type"]?.includes("application/json")) {
    return sendJson(response, 415, { error: "Expected a JSON request." });
  }

  let data;
  try {
    data = JSON.parse(await readRequestBody(request));
  } catch (error) {
    return sendJson(response, error.status || 400, { error: "Invalid request body." });
  }

  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return sendJson(response, 400, { error: "Invalid order." });
  }
  if (typeof data.name !== "string" || typeof data.phone !== "string" ||
      typeof data.address !== "string" || !Array.isArray(data.items) ||
      data.items.length < 1 || data.items.length > 20) {
    return sendJson(response, 400, { error: "Please complete the order details." });
  }

  const name = cleanText(data.name);
  const phone = cleanText(data.phone);
  const address = cleanText(data.address);
  if (!name || name.length > 100 || !address || address.length > 300 ||
      !/^[+()\d\s.-]{7,40}$/.test(phone) || phone.replace(/\D/g, "").length < 7) {
    return sendJson(response, 400, { error: "Please check the order details." });
  }

  const quantities = new Map();
  for (const item of data.items) {
    if (!item || typeof item.id !== "string" || !Number.isInteger(item.quantity) ||
        item.quantity < 1 || item.quantity > 99 || !productsById.has(item.id)) {
      return sendJson(response, 400, { error: "Invalid pizza selection." });
    }
    quantities.set(item.id, Math.min(99, (quantities.get(item.id) || 0) + item.quantity));
  }

  const language = data.language === "ru" ? "ru" : "uz";
  const orderLines = Array.from(quantities, ([id, quantity]) => {
    const product = productsById.get(id);
    return `${product.name[language]} × ${quantity} — ${(product.price * quantity).toLocaleString("ru-RU")} so‘m`;
  });
  const total = Array.from(quantities, ([id, quantity]) => productsById.get(id).price * quantity)
    .reduce((sum, amount) => sum + amount, 0);
  const text = [
    language === "ru" ? "Новый заказ Pizza House" : "Yangi buyurtma — Pizza House",
    "",
    `${language === "ru" ? "Имя" : "Ism"}: ${name}`,
    `${language === "ru" ? "Телефон" : "Telefon"}: ${phone}`,
    `${language === "ru" ? "Адрес" : "Manzil"}: ${address}`,
    "",
    ...orderLines,
    "",
    `${language === "ru" ? "Итого" : "Jami"}: ${total.toLocaleString("ru-RU")} so‘m`
  ].join("\n");

  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim() || "8983060286";
  if (!token) {
    console.error("Telegram is not configured: set TELEGRAM_BOT_TOKEN in .env.");
    return sendJson(response, 503, {
      error: "Telegram bot token is not configured.",
      code: "TELEGRAM_NOT_CONFIGURED"
    });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  let telegramResponse;
  try {
    telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
      signal: controller.signal
    });
  } catch (error) {
    console.error("Could not reach the Telegram Bot API:", error.message);
    return sendJson(response, 502, {
      error: "Could not reach the Telegram Bot API.",
      code: "TELEGRAM_UNREACHABLE"
    });
  } finally {
    clearTimeout(timeout);
  }

  if (!telegramResponse.ok) {
    const details = await telegramResponse.text();
    console.error(`Telegram Bot API returned ${telegramResponse.status}: ${details}`);
    return sendJson(response, 502, {
      error: "Telegram rejected the order.",
      code: "TELEGRAM_REJECTED"
    });
  }
  let telegramResult;
  try {
    telegramResult = await telegramResponse.json();
  } catch (error) {
    console.error("Could not read the Telegram Bot API response:", error.message);
    return sendJson(response, 502, {
      error: "Could not confirm the order.",
      code: "TELEGRAM_UNCONFIRMED"
    });
  }
  if (telegramResult.ok !== true) {
    console.error("Telegram Bot API did not accept the order:", telegramResult.description || "No details returned.");
    return sendJson(response, 502, {
      error: "Telegram rejected the order.",
      code: "TELEGRAM_REJECTED"
    });
  }
  return sendJson(response, 200, { ok: true });
}

async function serveStatic(url, request, response) {
  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    response.writeHead(400);
    response.end("Bad request");
    return;
  }
  const relativePath = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const rootName = relativePath.split(/[\\/]/)[0];
  if (relativePath !== "index.html" && !allowedStaticRoots.has(rootName)) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  const filePath = path.resolve(__dirname, relativePath);
  const resolvedRelativePath = path.relative(__dirname, filePath);
  const resolvedRoot = resolvedRelativePath.split(path.sep)[0];
  if ((resolvedRelativePath.startsWith(`..${path.sep}`) || resolvedRelativePath === "..") ||
      (resolvedRelativePath !== "index.html" && !allowedStaticRoots.has(resolvedRoot))) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  try {
    const file = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": contentTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-cache",
      "X-Content-Type-Options": "nosniff"
    });
    response.end(request.method === "HEAD" ? undefined : file);
  } catch (error) {
    if (error.code === "ENOENT" || error.code === "EISDIR") {
      response.writeHead(404);
      response.end("Not found");
      return;
    }
    console.error("Could not read requested file:", error.message);
    response.writeHead(500);
    response.end("Internal server error");
  }
}

const server = http.createServer(async (request, response) => {
  let url;
  try {
    url = new URL(request.url, "http://localhost");
  } catch {
    response.writeHead(400);
    response.end("Bad request");
    return;
  }

  if (url.pathname === "/api/order") {
    if (request.method !== "POST") {
      response.writeHead(405, { Allow: "POST" });
      response.end();
      return;
    }
    await handleOrder(request, response);
    return;
  }

  if (url.pathname === "/api/contact") {
    if (request.method !== "POST") {
      response.writeHead(405, { Allow: "POST" });
      response.end();
      return;
    }
    await handleContact(request, response);
    return;
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end();
    return;
  }
  await serveStatic(url, request, response);
});

server.listen(port, () => {
  console.log(`Pizza House is running at http://localhost:${port}`);
});
