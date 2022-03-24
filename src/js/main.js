/* eslint-disable no-console */

function setServiceHover() {
    const serviceItems = document.querySelectorAll('.service__item');
    const header = document.querySelector('header');
    const svg = header.querySelectorAll('svg');
    const section = document.querySelector('.first_screen');
    const titles = section.querySelectorAll('.title_text');

    function showOne(elements, index) {
        elements.forEach((item) => {
            item.classList.add('hide');
        });

        elements[index].classList.remove('hide');
    }

    showOne(titles, 0);

    function unsetСondition({headerClass, svgClass, sectionClass, titleIndex}) {
        header.classList.remove(headerClass);
        svg.forEach((icon) => {
            icon.classList.remove(svgClass);
        });
        section.classList.add(sectionClass);
        showOne(titles, titleIndex);
    }

    function setСondition({headerClass, svgClass, sectionClass, titleIndex}) {
        header.classList.add(headerClass);
        svg.forEach((icon) => {
            icon.classList.add(svgClass);
        });
        section.classList.add(sectionClass);
        showOne(titles, titleIndex);
    }

    function setItems(item) {
        const id = item.getAttribute('id');
        unsetСondition({headerClass: 'header--white',
                            svgClass: 'white',
                            sectionClass: 'first_screen--1',
                            titleIndex: 0});
        switch (id) {
            case 'red':
                setСondition({headerClass: 'header--white',
                            svgClass: 'white',
                            sectionClass: 'first_screen--2',
                            titleIndex: 1});
                break;
            case 'green':
                setСondition({headerClass: 'header--white',
                            svgClass: 'white',
                            sectionClass: 'first_screen--3',
                            titleIndex: 2});
                break;
            case 'blue':
                setСondition({headerClass: 'header--white',
                            svgClass: 'white',
                            sectionClass: 'first_screen--4',
                            titleIndex: 3});
                break;
            case 'purple':
                setСondition({headerClass: 'header--white',
                            svgClass: 'white',
                            sectionClass: 'first_screen--5',
                            titleIndex: 4});
                break;
            default:
                unsetСondition({headerClass: 'header--white',
                            svgClass: 'white',
                            sectionClass: 'first_screen--1',
                            titleIndex: 0});
                break;
        }
    }

    function unsetItems(item) {
        const id = item.getAttribute('id');
        unsetСondition({headerClass: 'header--white',
                            svgClass: 'white',
                            sectionClass: 'first_screen--1',
                            titleIndex: 0});
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

    serviceItems.forEach((el) => {
        el.addEventListener('mouseover', () => {
            setItems(el);
        });

        el.addEventListener('mouseleave', () => {
            unsetItems(el);
        });

        el.addEventListener('click', () => {
            setItems(el);
        });
    });
}

setServiceHover();

function setHeaderOnHover() {
    const headerAddress = document.querySelector('.header_address');
    const headerMenu = document.querySelector('.header_menu');
    const headerCall = document.querySelector('.header_call');
    // const headerCallBtn = document.querySelector('.header__button');
    const map = document.querySelector('.header_link_with_icon--map');
    const tel = document.querySelector('.header_link_with_icon--tel');
    const header = document.querySelector('header');
    console.log(headerCall);

    function hide() {
        headerCall.classList.remove('flex');
        headerAddress.classList.remove('flex');
        // headerCallBtn.classList.add('hide');
    }

    hide();

    map.addEventListener('mouseover', () => {
        headerMenu.classList.add('hide');
        headerCall.classList.remove('flex');
        headerAddress.classList.add('flex');
    });

    tel.addEventListener('mouseover', () => {
        headerAddress.classList.remove('flex');
        headerMenu.classList.add('hide');
        headerCall.classList.add('flex');
        // headerCallBtn.classList.remove('hide');
    });

    header.addEventListener('mouseleave', () => {
        hide();
        headerMenu.classList.remove('hide');
    });
}

setHeaderOnHover();
