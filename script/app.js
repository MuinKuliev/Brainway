new Swiper('.clients', {
  loop: true,
  slidesPerView: 7,
  spaceBetween: 50,
  autoplay: {
    delay: 0
  },
  speed: 3000
});

new Swiper('.customers-slider', {
  slidesPerView: 3,
  spaceBetween: -60,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  centeredSlides: true,
  pagination: {
    el: ".slider-dots",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const header_burger = document.querySelector('.header .header-burger'),
  header_items = document.querySelector('.header .header_items');

header_burger.addEventListener('click', () => {
  header_burger.classList.toggle('active');
  header_items.classList.toggle('d-none');
});