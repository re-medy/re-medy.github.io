

let headerSwiper = new Swiper('.header__slider .swiper-container', {
   effect: 'fade',
   speed: 1000,
   loop: true,
   allowTouchMove: false,
   autoplay: {
      delay: 5000
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true
   },

})

let bonsaiDescription = new Swiper('.gallery-thumbs', {
   loop: true,
   speed: 1000,
   loopedSlides: 3,
   watchSlidesVisibility: true,
   watchSlidesProgress: true,
   spaceBetween: 550,
   allowTouchMove: false,
}

)
let bonsaiSwiper = new Swiper('.bonsai__slider .gallery-top', {
   speed: 1000,
   spaceBetween: 700,
   loop: true,
   loopedSlides: 3,
   pagination: {
      el: '.swiper-pagination'
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   thumbs: {
      swiper: bonsaiDescription,
   },
})

let stylesSwiper = new Swiper('.styles__slider .swiper-container', {
   slidesPerView: 1,
   spaceBetween: 100,
   scrollbar: {
      el: '.swiper-scrollbar',
      dragSize: 10,
      draggable: true
   },
   breakpoints: {
      940: {
        slidesPerView: 2,
        spaceBetween: 100,
      },
      1450: {
        slidesPerView: 3,
      //   spaceBetween: 50,
      }},
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
})
;

window.onload = function(){
   let loader = document.querySelector('.pre-loader');
   anime({
      targets: loader,
      opacity: 0,
      easing: 'linear',
      duration: 500,
      complete: function(anim){
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


let burgerMenu  = document.querySelector('.header__burger');

burgerMenu.onclick = ()=> {
   document.querySelector('.header__menu').classList.toggle('active');
   burgerMenu.classList.toggle('active');
}


let logoContainer = document.querySelector('.header__logo-container');
let count = 0;
window.addEventListener('resize', function(){     
   if(window.innerWidth <= 768 && count == 0){
      count = 1;
      let newLogo = document.createElement('img');
      newLogo.className = 'header__menu-logo';
      newLogo.src = 'img/logo.jpg';
      logoContainer.appendChild(newLogo); 
   }
   else if(window.innerWidth >= 769 && count == 1){   
      count = 0;
      logoContainer.removeChild(document.querySelector('.header__menu-logo'));
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
 