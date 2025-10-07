AOS.init();

const swiper = new Swiper(".swiper", {
  // Optional parameters
  speed: 400,
  spaceBetween: 10,
  slidesPerView: 6,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 6,
    },
  },

  loop: true,

  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const menuBtn = document.getElementById("menuBtn");
const sidenav = document.getElementById("sidenav");
menuBtn.addEventListener("click", () => {
  sidenav.classList.toggle("hidden");
});

// const navbar = document.getElementById('navbar');
// const scrolledClass = 'bg-black/5 backdrop-blur-none';
// const initialClass = 'bg-black/5 backdrop-blur-sm';

// const scrollHandler = () => {
//     if (window.scrollY > 50){
//         navbar.classList.add(scrolledClass);
//         navbar.ClassList.remove(initialClass);
//     }
// } else {
//     navbar.ClassList.remove(...scrolledClass.split(''));
//     navbar.ClassList.add(...initialClass.split(''));
// };
