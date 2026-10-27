document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    // Анимация бургера (опционально)
    const spans = burger.querySelectorAll('span');
    if (nav.classList.contains('active')) {
      burger.style.transform = 'rotate(90deg)';
    } else {
      burger.style.transform = 'rotate(0)';
    }
  });

  // Закрыть меню при клике на ссылку (для мобильных)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });
});
