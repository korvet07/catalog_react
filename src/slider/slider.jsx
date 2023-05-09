import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper";
import { Image } from "/src/elements";
import { StyledSlider, StyledButtonPrev, SliderWrapper, StyledButtonNext } from "./styled";

function Slider({ images }) {
  SwiperCore.use([Navigation]);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <SliderWrapper>
      <div style={{ overflow: 'hidden', marginBottom: '20px', maxHeight: '400px' }}>
        <StyledButtonPrev left ref={navigationPrevRef} title="Назад">
          &lt;
        </StyledButtonPrev>
        <StyledButtonNext right ref={navigationNextRef} title="Вперёд">
          &gt;
        </StyledButtonNext>
        <StyledSlider
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          freeMode
          watchSlidesProgress
          slidesPerView={1}
          spaceBetween={20}
          loop
          modules={[Navigation, Thumbs, Pagination]}
        >
          {images &&
            images.length &&
            images.map((image) => (
              <SwiperSlide key={image}>
                <Image
                  src={image}
                  alt="изображение продукта"
                  width="200"
                  height="257"
                  maxWidth="200"
                />
              </SwiperSlide>
            ))}
        </StyledSlider>
      </div>
      <div className="swiper-pagination"></div>
    </SliderWrapper>


  );
}

export default Slider;
