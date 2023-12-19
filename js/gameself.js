'use strict'

// Toggle Menu

let links = document.querySelector('nav .container .links')
let linksOpener = document.querySelector('nav .container .acc-deta .toggle-menu');

linksOpener.addEventListener('click', function () {
  links.classList.toggle('show')
})


// Dark Mood

let darkBut = document.querySelector('.darkmood');

if (localStorage.getItem('theme')) {
  document.querySelector('html').id = `${localStorage.getItem('theme')}`
} else {
  localStorage.setItem('theme', 'light');
}

darkBut.onclick = function () {
  if (localStorage.getItem('theme') === 'light') {
    document.querySelector('html').id = `dark`
    localStorage.setItem('theme', 'dark')
  } else {
    document.querySelector('html').id = 'light';
    localStorage.setItem('theme', 'light')
  }
}

// Scroll Window

let nav = document.querySelector('nav')

window.onscroll = function () {
  if (scrollY > 0) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}


// Carousel Landing

$(document).ready(function () {
  $(".owl-games").owlCarousel({
    nav: true,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    items: 1,
    animateOut: 'fadeOut',
    touchDrag: false,
    mouseDrag: false,
    stopOnHover: true,
    singleItem: true
  })
});

// Append Game First

let games = document.querySelectorAll('.gird-main .box');

games.forEach(ele => {
  ele.addEventListener('click', function () {
    this.parentElement.prepend(this);
  })
})

// Set Year 
let year = document.querySelector('.year');

year.textContent = new Date().getFullYear()