// При 50 пикселях надо приклеить меню

const header = $('.header');
const headerWrapper = $('.header__wrapper');
const footerScrollUp = $('.footer__btn');

$(window).on('scroll', () => {
  if (scrollY > 50) {
    header.addClass('header--scrolled');
    headerWrapper.addClass('header__wrapper--scrolled');
  }
  if (scrollY < 50) {
    header.removeClass('header--scrolled');
    headerWrapper.removeClass('header__wrapper--scrolled');
  }
});

footerScrollUp.on('click', (e) => {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, 'smooth');
});

Fancybox.bind('[data-fancybox]', {
  // Your custom options
});
