// Переменные для удобства работы
const header = $('.header'); // Хедер
const headerWrapper = $('.header__wrapper'); // Обертка хедера
const footerScrollUp = $('.footer__btn'); // Кнопка для скролла наверх в футере
const scrollBtn = $('.scroll_btn'); // Кнопка скролла наверх в мобилке
const menuBtn = $('.header__nav-menu'); // Кнопка для раскрытия навигации в мобилке
const menuList = $('.header__nav-list'); // Список меню

// Прилипающая навигация при скролле
$(window).on('scroll', () => {
  if ($(window).width() <= 1140) return; // Проверка на ширину экрана, чтобы не мешало при адаптиве
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

// Кнопка для проматывания на вверх на мобилке
scrollBtn.on('click', (e) => {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, 'smooth');
});

// Показ кнопки скролла вверх при промотке вниз
$(window).on('scroll', (e) => {
  e.preventDefault();
  if ($(window).width() > 830) return; // Проверка на ширину экрана, чтобы не мешало при адаптиве

  if (scrollY >= 300) {
    scrollBtn.addClass('scroll_btn--active');
  }
  if (scrollY < 300) {
    scrollBtn.removeClass('scroll_btn--active');
  }
});

// Бургер-меню
menuBtn.on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('header__nav-menu--active');
  menuList.toggleClass('header__nav-list--active');
});

// Галерея
Fancybox.bind('[data-fancybox]', {
  // Your custom options
});
