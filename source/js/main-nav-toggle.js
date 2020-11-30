var navMain = document.querySelector('.main-nav__list');
var navToggle = document.querySelector('.main-nav__toggle');
var noJs = document.querySelector('.main-nav__toggle');

if (noJs.classList.contains('main-nav__toggle--nojs')) {
  navMain.classList.add('main-nav__list--closed');
  navToggle.classList.add('main-nav__toggle--closed');
}

navToggle.classList.remove('main-nav__toggle--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav__list--closed')) {
    navMain.classList.remove('main-nav__list--closed');
    navToggle.classList.remove('main-nav__toggle--closed');
  } else {
    navMain.classList.add('main-nav__list--closed');
    navToggle.classList.add('main-nav__toggle--closed');
  }
});
