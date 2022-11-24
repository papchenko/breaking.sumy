const menuBurger = document.querySelector('.menu__burger');
const menuBody = document.querySelector('.menu__body');

export function menu() {
    if (menuBurger) {
        menuBurger.addEventListener('click', function () {
            document.body.classList.toggle('_lock');
            menuBody.classList.toggle('_active');
            menuBurger.classList.toggle('_active');
        })
    }
}
