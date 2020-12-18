var navMain = document.querySelector('.main-nav__list');
var navToggle = document.querySelector('.page-header__toggle');
var noJs = document.querySelector('.page-header__toggle');
var buttonForm = document.querySelector('.button-wrap__button');
var modalSuccess = document.querySelector('.modal--success');
var modalError = document.querySelector('.modal--error');
var dataItemField = document.querySelectorAll('.data-item__field:required');
var modalClose = document.querySelectorAll('.modal__button');
var choiceItemInput = document.querySelector('.choice-item__input');

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

if (buttonForm) {
  buttonForm.addEventListener('click', function (evt) {
    evt.preventDefault();
    for (var i = 0; i < dataItemField.length; i++) {
      if (dataItemField[i].value === '') {
        dataItemField[i].classList.add('data-item__field--error');
        modalError.classList.remove('modal--error--close');
        return;
      } else {
        dataItemField[i].classList.remove('data-item__field--error');
      }
    }
    modalSuccess.classList.remove('modal--success--close');
  });
}

for (var i = 0; i < modalClose.length; i++) {
  modalClose[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    modalError.classList.add('modal--error--close');
    modalSuccess.classList.add('modal--success--close');
  });
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (!modalSuccess.classList.contains('modal--success--close')) {
      evt.preventDefault();
      modalSuccess.classList.add('modal--success--close');
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (!modalError.classList.contains('modal--error--close')) {
      evt.preventDefault();
      modalError.classList.add('modal--error--close');
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  if (document.body.clientWidth >= 768) {
    choiceItemInput.tabIndex = 5;
  }
});
