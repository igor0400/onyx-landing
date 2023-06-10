import React, { FC } from 'react';
import { cards } from '../configs/cards';
import Card from '../../../../entities/home-page/Card';

const Cards: FC = () => {
  return (
    <div className="max-w-[1220px] mx-auto pt-20 lg:pt-36 max-sm:px-5 max-xl:px-10">
      <h3 className="uppercase text-2xl sm:text-3xl font-bold">Следите, управляйте</h3>
      <p className="opacity-50 font-light max-w-lg mt-2 sm:mt-3">
        Управляйте заведением в режиме реального времени и отслеживайте всю
        необходимую информацию,{' '}
        <span className="font-semibold">вы получите</span>:
      </p>
      <div
        className="max-sm:grid sm:flex sm:flex-wrap gap-4 sm:gap-8 mt-8 sm:mt-12"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))' }}
      >
        {cards.map((card, i) => (
          <Card {...card} index={i + 1} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
