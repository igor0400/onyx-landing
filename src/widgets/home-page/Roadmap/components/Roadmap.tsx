import React, { FC } from 'react';
import Slider from './Slider';

const Roadmap: FC = () => {
  return (
    <div className="max-w-[1220px] mx-auto my-36 max-xl:px-10">
      <h3 className="uppercase text-3xl font-bold">Дорожная карта</h3>
      <p className="opacity-50 font-light max-w-md mt-3">
        Узнайте больше о развитии продукта — постоянно выпускаем для вас новые
        функции и модули.
      </p>

      <Slider />
    </div>
  );
};

export default Roadmap;
