const burger = document.getElementById('burger');
const nav = document.querySelector('.navbar nav');
burger.addEventListener('click', () => {
  nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', nav.classList.contains('open'));
});
// Facultatif : ferme le menu si on clique ailleurs
window.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !burger.contains(e.target)) {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
});

