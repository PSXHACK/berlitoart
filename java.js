const clicknav = document.querySelector('.responsivenav');
const nav = document.querySelector('nav');

clicknav.addEventListener('click', function() {
  nav.classList.toggle('active');
});