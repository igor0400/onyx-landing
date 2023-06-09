import React, { FC } from 'react';
import { cards } from '../configs/cards';
import BenefitsCard from '../../../../entities/home-page/BenefitsCard';

const Benefits: FC = () => {
  return (
    <div className="max-w-[1220px] mx-auto pb-36 max-xl:px-10">
      <h3 className="uppercase text-3xl font-bold">Наши преимущества</h3>
      <p className="opacity-50 font-light mt-3">
        Мы не с кем не конкурируем, мы создаем продукт на который все ровняются
      </p>

      <div className="flex flex-wrap gap-8 pt-14">
        {cards.map((item) => (
          <BenefitsCard {...item} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
