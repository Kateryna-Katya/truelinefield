import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const createSwiper = (
  swiperClass,
  nextBtn,
  prevBtn,
  paginationClass
) => {
  let swiper = null;

  const initSwiper = () => {
    if (window.innerWidth < 1440 && !swiper) {
      swiper = new Swiper(swiperClass, {
        modules: [Navigation, Pagination],

        slidesPerView: 1,
        spaceBetween: 16,
        loop: true,

        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },

        pagination: {
          el: paginationClass,
          clickable: true,
        },
      });
    }

    if (window.innerWidth >= 1440 && swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  };

  initSwiper();

  window.addEventListener('resize', initSwiper);
};

// TITLES
createSwiper(
  '.titles-swiper',
  '.titles-next',
  '.titles-prev',
  '.titles-pagination'
);

// LINES
createSwiper(
  '.lines-swiper',
  '.lines-next',
  '.lines-prev',
  '.lines-pagination'
);