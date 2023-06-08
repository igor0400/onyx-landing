import React, { FC } from 'react';
import background from 'public/images/bg-lines.png';
import { screens } from '../configs/screens';
import ScreensCard from '../../../../entities/home-page/ScreensCard';

const Screens: FC = () => {
  return (
    <div
      className="py-36 h-full w-full max-w-[1920px] mx-auto"
      style={{
        background: `url('${background.src}') 100% 100% / 100% no-repeat`,
      }}
    >
      {screens.map((item, i) => (
        <ScreensCard {...item} key={item.title} mt={i === 0 ? false : true} />
      ))}
    </div>
  );
};

export default Screens;
