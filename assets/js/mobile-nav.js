const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.offscreen-nav');

const accessible = () => {
  let expanded = burger.getAttribute('aria-expanded') === 'true' || false;
  burger.setAttribute('aria-expanded', !expanded);
  let menu = document.querySelector('.offscreen-nav-links');
  menu = menu.toggleAttribute("hidden");
}

document.addEventListener('DOMContentLoaded', () => {
  burger.addEventListener('click', () => {
    burger.classList.toggle('toggle');
    mobileNav.classList.toggle('open');
    // accessible();
  });
});


