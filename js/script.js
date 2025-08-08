// Переменные для удобства работы
const header = $('.header');
const headerWrapper = $('.header__wrapper');
const footerScrollUp = $('.footer__btn');

// Прилипающая навигация при скролле
$(window).on('scroll', () => {
  if (scrollY >= 50) {
    header.addClass('header--scrolled');
    headerWrapper.addClass('header__wrapper--scrolled');
  }
  if (scrollY <= 50) {
    header.removeClass('header--scrolled');
    headerWrapper.removeClass('header__wrapper--scrolled');
  }
});

// Кнопка для проматывания на вверх в футоре
footerScrollUp.on('click', (e) => {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, 'smooth');
});

// Галерея
Fancybox.bind('[data-fancybox]', {
  // Your custom options
});
