import React, { FC } from 'react';
import FeaturesCard from '../../../../entities/home-page/FeaturesCard';
import { cards } from '../configs/cards';

const Features: FC = () => {
  return (
    <div className="max-w-[1220px] mx-auto mt-36 max-xl:px-10">
      <h3 className="uppercase text-3xl font-bold">
        Функционал и возможности Onyx
      </h3>
      <p className="opacity-50 font-light mt-3">
        Контроль загрузки, расчеты, оплаты 24/7 из любой точки мира
      </p>
      <div className="flex flex-col gap-10">
        {cards.map((item) => (
          <FeaturesCard {...item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Features;
