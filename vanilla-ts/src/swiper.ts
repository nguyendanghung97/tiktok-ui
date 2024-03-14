// import {animationSlide} from "./gasp.ts";
export const setupSwiper = () => {
  const defaultSetting = {
    loop: true,
    // autoHeight: true,
    spaceBetween: 20,
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullets',
    //   clickable: true
    // },
     // Navigation arrows
    navigation: {
      nextEl: '#swiper-button-next',
      prevEl: '#swiper-button-prev',
    },
    // on: {
    //   init: (el: any) => animationSlide(el.slides[el.activeIndex], 0),
    //   slideChangeTransitionStart: (el: any) => animationSlide(el.slides[el.activeIndex], 0),
    // },
    autoplay: {
      delay: 5000,
    },
  }
  new Swiper(".mySwiper", {
    ...defaultSetting,
    slidesPerView: 1,
  });

  new Swiper(".swiper-section-contact", {
    ...defaultSetting,
    slidesPerView: 2,
    breakpoints: {
      1366: {
        slidesPerView: 5,
      },
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 2,
      },
    },
  });

  new Swiper(".related-swiper", {
    ...defaultSetting,
    slidesPerView: 1,
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 2,
      },
    }
  });
}
setupSwiper();