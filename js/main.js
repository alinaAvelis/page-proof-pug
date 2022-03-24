/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/* eslint-disable no-console */
function setServiceHover() {
  var serviceItems = document.querySelectorAll('.service__item');
  var header = document.querySelector('header');
  var svg = header.querySelectorAll('svg');
  var section = document.querySelector('.first_screen');
  var titles = section.querySelectorAll('.title_text');

  function showOne(elements, index) {
    elements.forEach(function (item) {
      item.classList.add('hide');
    });
    elements[index].classList.remove('hide');
  }

  showOne(titles, 0);

  function unsetСondition(_ref) {
    var headerClass = _ref.headerClass,
        svgClass = _ref.svgClass,
        sectionClass = _ref.sectionClass,
        titleIndex = _ref.titleIndex;
    header.classList.remove(headerClass);
    svg.forEach(function (icon) {
      icon.classList.remove(svgClass);
    });
    section.classList.add(sectionClass);
    showOne(titles, titleIndex);
  }

  function setСondition(_ref2) {
    var headerClass = _ref2.headerClass,
        svgClass = _ref2.svgClass,
        sectionClass = _ref2.sectionClass,
        titleIndex = _ref2.titleIndex;
    header.classList.add(headerClass);
    svg.forEach(function (icon) {
      icon.classList.add(svgClass);
    });
    section.classList.add(sectionClass);
    showOne(titles, titleIndex);
  }

  function setItems(item) {
    var id = item.getAttribute('id');
    unsetСondition({
      headerClass: 'header--white',
      svgClass: 'white',
      sectionClass: 'first_screen--1',
      titleIndex: 0
    });

    switch (id) {
      case 'red':
        setСondition({
          headerClass: 'header--white',
          svgClass: 'white',
          sectionClass: 'first_screen--2',
          titleIndex: 1
        });
        break;

      case 'green':
        setСondition({
          headerClass: 'header--white',
          svgClass: 'white',
          sectionClass: 'first_screen--3',
          titleIndex: 2
        });
        break;

      case 'blue':
        setСondition({
          headerClass: 'header--white',
          svgClass: 'white',
          sectionClass: 'first_screen--4',
          titleIndex: 3
        });
        break;

      case 'purple':
        setСondition({
          headerClass: 'header--white',
          svgClass: 'white',
          sectionClass: 'first_screen--5',
          titleIndex: 4
        });
        break;

      default:
        unsetСondition({
          headerClass: 'header--white',
          svgClass: 'white',
          sectionClass: 'first_screen--1',
          titleIndex: 0
        });
        break;
    }
  }

  function unsetItems(item) {
    var id = item.getAttribute('id');
    unsetСondition({
      headerClass: 'header--white',
      svgClass: 'white',
      sectionClass: 'first_screen--1',
      titleIndex: 0
    });

    switch (id) {
      case 'red':
        section.classList.remove('first_screen--2');
        break;

      case 'green':
        section.classList.remove('first_screen--3');
        break;

      case 'blue':
        section.classList.remove('first_screen--4');
        break;

      case 'purple':
        section.classList.remove('first_screen--5');
        break;

      default:
        section.classList.add('first_screen--1');
        break;
    }
  }

  serviceItems.forEach(function (el) {
    el.addEventListener('mouseover', function () {
      setItems(el);
    });
    el.addEventListener('mouseleave', function () {
      unsetItems(el);
    });
    el.addEventListener('click', function () {
      setItems(el);
    });
  });
}

setServiceHover();

function setHeaderOnHover() {
  var headerAddress = document.querySelector('.header_address');
  var headerMenu = document.querySelector('.header_menu');
  var headerCall = document.querySelector('.header_call'); // const headerCallBtn = document.querySelector('.header__button');

  var map = document.querySelector('.header_link_with_icon--map');
  var tel = document.querySelector('.header_link_with_icon--tel');
  var header = document.querySelector('header');
  console.log(headerCall);

  function hide() {
    headerCall.classList.remove('flex');
    headerAddress.classList.remove('flex'); // headerCallBtn.classList.add('hide');
  }

  hide();
  map.addEventListener('mouseover', function () {
    headerMenu.classList.add('hide');
    headerCall.classList.remove('flex');
    headerAddress.classList.add('flex');
  });
  tel.addEventListener('mouseover', function () {
    headerAddress.classList.remove('flex');
    headerMenu.classList.add('hide');
    headerCall.classList.add('flex'); // headerCallBtn.classList.remove('hide');
  });
  header.addEventListener('mouseleave', function () {
    hide();
    headerMenu.classList.remove('hide');
  });
}

setHeaderOnHover();
/******/ })()
;
//# sourceMappingURL=main.js.map