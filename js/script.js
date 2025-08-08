const footerScrollUp = $('.footer__btn');

footerScrollUp.on('click', (e) => {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, 'smooth');
});
