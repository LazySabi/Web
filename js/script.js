const burger = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  overlay.classList.toggle('active');
});
