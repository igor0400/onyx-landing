import React, { FC } from 'react';

import background from 'public/images/background.jpg';

const Title: FC = () => {
  return (
    <div
      className="title-wrapper"
      style={{ background: `url(${background.src}) 100% / 100% no-repeat` }}
    >
      <div className="uppercase flex flex-col justify-center items-center full-height pb-14 w-full h-full max-w-6xl mx-auto">
        <h1 className="logo text-[400px] leading-[240px] pt-12 pb-6">onyx</h1>
        <p className="text-4xl">Мир меняет правила, мы - создаем</p>
      </div>
    </div>
  );
};

export default Title;
