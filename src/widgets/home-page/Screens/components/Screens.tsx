import React, { FC } from 'react';
import ScreensCard from '../../../../entities/home-page/ScreensCard';
import { useTranslate } from '../../../../features/locale';

import background from 'public/images/bg-lines.png';
import backgroundBlur from 'public/images/bg-lines-blur.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import settings from '../model/locale/translate';

const Screens: FC = () => {
  const isLargerThan1600 = useMediaQuery('(min-width: 1600px)');
  const { t } = useTranslate(settings);

  return (
    <div
      className="py-20 lg:py-36 h-full w-full max-w-[1920px] mx-auto"
      style={{
        backgroundImage: `url('${background.src}'), url('${backgroundBlur.src}')`,
        backgroundPositionX: '100%, 100%',
        backgroundPositionY: '100%, 100%',
        backgroundSize: isLargerThan1600 ? '100%, 100%' : undefined,
        backgroundRepeat: 'no-repeat, no-repeat',
      }}
    >
      {t('screens').map((item: any, i: number) => (
        <ScreensCard
          {...item}
          id={i}
          key={item.title}
          mt={i === 0 ? false : true}
        />
      ))}
    </div>
  );
};

export default Screens;
