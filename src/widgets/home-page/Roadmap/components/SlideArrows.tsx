import Image from 'next/image';
import React, { FC } from 'react';
import { useSwiper } from 'swiper/react';

import leftArrow from 'public/icons/left-arrow.svg';
import rightArrow from 'public/icons/right-arrow.svg';

const SlideArrows: FC = () => {
  const swiper = useSwiper();

  const handlePrev = () => swiper.slidePrev();

  const handleNext = () => swiper.slideNext();

  return (
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
  );
};

export default SlideArrows;
