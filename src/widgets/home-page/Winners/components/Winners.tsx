import React, { FC } from 'react';
import { winners } from '../configs/winners';
import PartnerCard from '../../../../entities/home-page/PartnerCard';

const Winners: FC = () => {
  return (
    <div className="py-36 max-w-[1220px] mx-auto max-xl:px-10">
      <h3 className="uppercase text-3xl font-bold">Onyx - победители:</h3>
      <p className="opacity-50 font-light mt-3">
        Победители программ инкубации:
      </p>

      <div
        className="grid gap-8 mt-12"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
      >
        {winners.map((item) => (
          <PartnerCard {...item} key={item.alt} theme="light" />
        ))}
      </div>
    </div>
  );
};

export default Winners;
