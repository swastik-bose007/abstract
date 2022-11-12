// window.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
    
// }, false);
//     document.onkeydown = function(e) {
//     if(e.keyCode == 123) {
//      return false;
//     }
//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
//      return false;
//     }
//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
//      return false;
//     }
//     if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
//      return false;
//     }

//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
//      return false;
//     }      
//  }

// works
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});
// ------------------------------------------------------------------
//  Footer
// ------------------------------------------------------------------
const newyear = new Date().getFullYear();

document.getElementById('year').innerHTML = newyear;


