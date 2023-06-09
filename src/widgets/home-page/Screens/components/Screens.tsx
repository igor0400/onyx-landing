import React, { FC } from 'react';
import { screens } from '../configs/screens';
import ScreensCard from '../../../../entities/home-page/ScreensCard';

import background from 'public/images/bg-lines.png';
import backgroundBlur from 'public/images/bg-lines-blur.png';

const Screens: FC = () => {
  return (
    <div
      className="py-36 h-full w-full max-w-[1920px] mx-auto"
      style={{
        backgroundImage: `url('${background.src}'), url('${backgroundBlur.src}')`,
        backgroundPositionX: '100%, 100%',
        backgroundPositionY: '100%, 100%',
        backgroundSize: '100%, 100%',
        backgroundRepeat: 'no-repeat, no-repeat',
      }}
    >
      {screens.map((item, i) => (
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
