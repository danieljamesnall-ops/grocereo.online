
// main.js - simple interactivity
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav ul');
  if (toggle){
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
});
