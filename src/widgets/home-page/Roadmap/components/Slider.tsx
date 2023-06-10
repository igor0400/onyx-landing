import React, { FC } from 'react';
import RoadmapSliderCard from '../../../../entities/home-page/RoadmapSliderCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import useMediaQuery from '@mui/material/useMediaQuery';
import SlideArrows from './SlideArrows';
import { useTranslate } from '../../../../features/locale';

import settings from '../model/locale/translate.json';

const Slider: FC = () => {
  const isLargerThan1220 = useMediaQuery('(min-width: 1220px)');
  const isLargerThan1024 = useMediaQuery('(min-width: 1024px)');
  const isLargerThan800 = useMediaQuery('(min-width: 800px)');
  const isLargerThan640 = useMediaQuery('(min-width: 640px)');
  const { t } = useTranslate(settings);

  return (
    <Swiper
      spaceBetween={isLargerThan800 ? 50 : 0}
      slidesPerView={
        isLargerThan1220 ? 4 : isLargerThan1024 ? 3 : isLargerThan640 ? 2 : 1
      }
      className="mt-8 sm:mt-12 pr-10"
      width={
        isLargerThan1220
          ? 1200
          : isLargerThan1024
          ? 900
          : isLargerThan640
          ? 600
          : 260
      }
    >
      <div className="items-end flex">
        {t('slides').map((item: any, i: number) => (
          <SwiperSlide key={i} style={{ width: isLargerThan640 ? 280 : 240 }}>
            {({ isActive }) => (
              <RoadmapSliderCard {...item} index={i + 1} isActive={isActive} />
            )}
          </SwiperSlide>
        ))}
      </div>

      <SlideArrows />
    </Swiper>
  );
};

export default Slider;
