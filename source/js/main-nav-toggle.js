var navMain = document.querySelector('.main-nav__list');
var navToggle = document.querySelector('.page-header__toggle');
var noJs = document.querySelector('.page-header__toggle');

if (noJs.classList.contains('page-header__toggle--nojs')) {
  navMain.classList.add('main-nav__list--closed');
  navToggle.classList.add('page-header__toggle--closed');
}

navToggle.classList.remove('page-header__toggle--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav__list--closed')) {
    navMain.classList.remove('main-nav__list--closed');
    navToggle.classList.remove('page-header__toggle--closed');
  } else {
    navMain.classList.add('main-nav__list--closed');
    navToggle.classList.add('page-header__toggle--closed');
  }
});
