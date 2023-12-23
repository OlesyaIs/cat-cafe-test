import React, { useState, useRef, useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode, Navigation } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/thumbs";
import "swiper/scss/free-mode";
import "swiper/scss/navigation";
import { ReactComponent as LeftArrow } from "/src/assets/icons/leftArrow.svg";

import {
  SwiperWrapper,
  StyledSwiper,
  StyledSwiperMini,
  StyledSlide,
  StyledSlideMini,
  StyledButtonLeft,
  StyledButtonRight,
  RightArrow,
} from "./styles";

function Gallery({ slides = [] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <StyledSwiper
        spaceBetween={20}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs, FreeMode, Navigation]}
        loop={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <StyledSlide
              src={slide.src}
              alt={slide.alt}
              width={728}
              height={408}
            />
          </SwiperSlide>
        ))}
      </StyledSwiper>

      <SwiperWrapper>
        <StyledSwiperMini
          spaceBetween={20}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          onSwiper={setThumbsSwiper}
          loop={true}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <StyledSlideMini src={slide.src} alt={slide.alt} />
            </SwiperSlide>
          ))}
        </StyledSwiperMini>
        <StyledButtonLeft ref={navigationPrevRef}>
          <LeftArrow />
        </StyledButtonLeft>
        <StyledButtonRight ref={navigationNextRef}>
          <RightArrow />
        </StyledButtonRight>
      </SwiperWrapper>
    </>
  );
}

export default Gallery;
