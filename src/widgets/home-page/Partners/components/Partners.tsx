import React, { FC } from 'react';
import { partners } from '../configs/partners';
import PartnerCard from '../../../../entities/home-page/PartnerCard';

const Partners: FC = () => {
  return (
    <div className="max-w-6xl mx-auto my-36 max-xl:px-10">
      <h3 className="uppercase text-3xl font-bold">Наши партнеры</h3>
      <p className="opacity-50 font-light mt-3">
        Переверните компьютерную индустрию вместе с Onyx
      </p>
      <div className="flex flex-wrap gap-8 mt-12">
        {partners.map((item) => (
          <PartnerCard {...item} key={item.alt} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
