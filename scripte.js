const header = document.querySelector('.header')
header.addEventListener('click', (e) => {
  if (e.target.matches('.box-btn-nav') || e.target.matches('.btn-mini-nav')) {
    header.classList.toggle('navbar__expanded')
  } else if (e.target.matches('.fal') || e.target.matches('[data-menu]')) {
    header.classList.add('navbar__expanded')
  }
})