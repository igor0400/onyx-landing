import React, { FC } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import background from 'public/images/background.jpg';
import { useTranslate } from '../../../../features/locale';

import settings from '../model/locale/translate.json';

const Title: FC = () => {
  const isLargerThan1400 = useMediaQuery('(min-width: 1400px)');
  const { t } = useTranslate(settings);

  return (
    <div
      className="title-wrapper full-height max-sm:bg-none"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundPositionX: '100%',
        backgroundSize: isLargerThan1400 ? '100%' : undefined,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="uppercase flex flex-col justify-center items-center full-height pb-14 w-full mx-auto">
        <h1 className="logo text-9xl leading-[95px] sm:text-[180px] sm:leading-[80px] md:text-[240px] md:leading-[140px] lg:text-[330px] lg:leading-[200px] min-[1500px]:text-[400px] min-[1500px]:leading-[240px] sm:pt-12 sm:pb-6">
          onyx
        </h1>
        <p className="text-sm sm:text-lg md:text-xl lg:text-3xl min-[1500px]:text-4xl">
          {t('slogan')}
        </p>
      </div>
    </div>
  );
};

export default Title;
