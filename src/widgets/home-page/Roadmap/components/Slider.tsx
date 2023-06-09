import React, { FC, useRef, useCallback } from 'react';
import { slides } from '../configs/slides';
import RoadmapSliderCard from '../../../../entities/home-page/RoadmapSliderCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import leftArrow from 'public/icons/left-arrow.svg';
import rightArrow from 'public/icons/right-arrow.svg';
import classNames from 'classnames';

const Slider: FC = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    //@ts-ignore
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    //@ts-ignore
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <Swiper
      ref={sliderRef}
      spaceBetween={50}
      slidesPerView={4}
      className="mt-12 pr-10"
      width={1200}
    >
      <div className="items-end flex">
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <RoadmapSliderCard {...item} index={i + 1} isActive={isActive} />
            )}
          </SwiperSlide>
        ))}
      </div>
      <div className="flex justify-evenly items-center mt-12">
        <Image
          src={leftArrow}
          alt="left-arrow"
          className="cursor-pointer"
          onClick={handlePrev}
        />
        <Image
          src={rightArrow}
          alt="right-arrow"
          className="cursor-pointer"
          onClick={handleNext}
        />
      </div>
    </Swiper>
  );
};

export default Slider;
