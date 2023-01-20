// Variables menu
const navToggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.menu');
// Variables link activo
const menuLink = document.querySelectorAll('.menu__link');

// Hacer el menu visible y colocar su correspondient aria-label.
navToggle.addEventListener('click', () => {
    menu.classList.toggle('menu--visible');

    if(menu.classList.contains('menu--visible')) {

        navToggle.setAttribute('aria-label', 'Open Menu');
        navToggle.classList.add('nav__toggle--visible');
    } else {

        navToggle.setAttribute('aria-label', 'Close Menu');
        navToggle.classList.remove('nav__toggle--visible');
    }
});

/* Marcar link seleccionado */
menu.addEventListener('click', (e) => {

    if(e.target.classList.contains('menu__link')){

        menuLink.forEach( item => {
            item.classList.remove('menu__link--active');
        });

        e.target.classList.add('menu__link--active');

            // cerrar menu al hacer click en un link

        if (menu.classList.contains('menu--visible')) {
            menu.classList.remove('menu--visible');
            navToggle.setAttribute('aria-label', 'Close Menu');
            navToggle.classList.remove('nav__toggle--visible');
        }
    }

});