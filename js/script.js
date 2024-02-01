
const header__swiper = new Swiper(".header__swiper", {
   spaceBetween: 30,
   effect: "fade",
   pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      bulletClass: "header__pagination",
      bulletActiveClass: "header__pagination_active",
      clickable: true,
   },
   autoplay: {
      delay: 5000,
   },
})

const bonsai__swiper2 = new Swiper('.bonsai__swiper2', {
   watchSlidesProgress: true,
   allowTouchMove: false,
   spaceBetween: 520,
   speed: 800
})

const bonsai__swiper1 = new Swiper('.bonsai__swiper1', {
   navigation: {
      nextEl: ".bonsai__nextEl",
      prevEl: ".bonsai__prevEl"
   },
   pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      bulletClass: "bonsai__pagination",
      bulletActiveClass: "bonsai__pagination_active",
      clickable: true,

   },
   thumbs: {
      swiper: bonsai__swiper2,
   },
   speed: 800,
   spaceBetween: 700,
})

const styles__swiper = new Swiper('.styles__swiper', {
   slidesPerView: 1,
   spaceBetween: 0,
   autoplay: {
      delay: 5000,
   },
   breakpoints: {
      760: {
         slidesPerView: 2,
      },
      1170: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
   },
   scrollbar: {
      el: '.styles__scrollbar',
      dragClass: 'styles__scrollbar-drag',
      dragSize: 11,

   },
   navigation: {
      nextEl: '.styles__nextEl',
      prevEl: '.styles__prevEl',
   },

})

let burgerMenu = document.querySelector('.header__burger');
document.querySelector('header__list-item')
burgerMenu.onclick = () => {
   document.querySelector('.header__menu').classList.toggle('active');
   burgerMenu.classList.toggle('active');
   if (document.body.style.overflow != 'hidden') {
      document.body.style.overflow = 'hidden';
   } else {
      document.body.removeAttribute('style');
   }

   let menuItems = document.querySelectorAll('.header__list-item');

   for (let menuItem of menuItems) {
      menuItem.onclick = () => {
         document.querySelector('.header__menu').classList.toggle('active');
         burgerMenu.classList.toggle('active');
         if (document.body.style.overflow != 'hidden') {
            document.body.style.overflow = 'hidden';
         } else {
            document.body.removeAttribute('style');
         }
      }
   }
}
let count = 0,
   text = document.querySelectorAll('.slider-content__text');
window.addEventListener('resize', function () {
   if (window.innerWidth <= 425 && count == 0) {
      count = 1;
      for (i = 0; i < text.length; i++) {
         text[i].innerHTML = 'In Japan, it is believed that "pines are like people of high principle, whose manners express the inner essence". Pine energy will help you get rid of nervous disorders, stress.';
      }
   } else if (window.innerWidth >= 426 && count == 1) {
      count = 0;
      for (i = 0; i < text.length; i++) {
         text[i].innerHTML = 'In Japan, it is believed that "pines are like people of high principle, whose manners express the inner essence". Pine energy will help you get rid of nervous disorders, stress. No neurosis can withstand its influence. Pine is able to clean the human aura from foreign influences and partially remove the damage.';
      }
   }
})

AOS.init({
   disable: 'mobile',
   startEvent: 'DOMContentLoaded',
   initClassName: 'aos-init',
   animatedClassName: 'aos-animate',
   useClassNames: false,
   disableMutationObserver: false,
   debounceDelay: 50,
   throttleDelay: 99,


   offset: 120,
   delay: 0,
   duration: 1000,
   easing: 'ease',
   once: true,
   mirror: false,
   anchorPlacement: 'top-bottom',
})

window.onload = function () {
   let loader = document.querySelector('.pre-loader');
   anime({
      targets: loader,
      opacity: 0,
      easing: 'linear',
      duration: 500,
      complete: function (anim) {
         loader.parentNode.removeChild(loader);
      }
   });
}
anime({
   targets: '.pre-loader__art',
   rotate: 360,
   loop: true,
   easing: 'easeInOutExpo',
   duration: 1500
});

const anchors = document.querySelectorAll('a[href*="#"]')



for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {


      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      if (window.innerWidth <= 480) {
         setTimeout(function () {
            document.getElementById(blockID).scrollIntoView({
               behavior: 'smooth',
               block: 'start'
            })
         }, 300);
      } else {
         document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         })
      }
   })
}
