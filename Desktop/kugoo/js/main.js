document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');

    // Scroll hodisasini tinglash
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block'; // Tugmani ko'rsatish
        } else {
            backToTopButton.style.display = 'none'; // Tugmani yashirish
        }
    });

    // Tugma bosilganda yuqoriga qaytish
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');

    // Scroll hodisasini tinglash
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block'; // Tugmani ko'rsatish
        } else {
            backToTopButton.style.display = 'none'; // Tugmani yashirish
        }
    });

    // Tugma bosilganda yuqoriga qaytish
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
document.addEventListener('DOMContentLoaded', () => {
  // Yuqori kategoriya tablarini almashtirish
  const catTabBtns = document.querySelectorAll('.cat-tab-btn');
  catTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Bu yerga kelsa kategoriya o'zgarganda jadvalni yangilash kodi ulanadi
      console.log('Kategoriya o\'zgartirildi:', btn.dataset.category);
    });
  });

  // Chap tomondagi model tablarini almashtirish
  const modelTabBtns = document.querySelectorAll('.model-tab-btn');
  modelTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modelTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Bu yerga model o'zgarganda narxlarni dinamik o'zgartirish JS logikasi yoziladi
      console.log('Model o\'zgartirildi:', btn.dataset.model);
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const hydroTabBtns = document.querySelectorAll('.hydro-tab-btn');
  
  hydroTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      hydroTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedTab = btn.dataset.tab;
      console.log('Tanlangan xizmat:', selectedTab);
      // Bu yerga tablar o'zgarganda narxlarni moslashtirish logikasini yozishingiz mumkin
    });
  });
});