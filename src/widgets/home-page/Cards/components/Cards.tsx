import React, { FC } from 'react';
import { cards } from '../configs/cards';
import Card from '../../../../entities/home-page/Card';

const Cards: FC = () => {
  return (
    <div className="max-w-6xl mx-auto mt-36 max-xl:px-10">
      <h3 className="uppercase text-3xl font-bold">Следите, управляйте</h3>
      <p className="opacity-50 font-light max-w-lg mt-3">
        Управляйте заведением в режиме реального времени и отслеживайте всю
        необходимую информацию,{' '}
        <span className="font-semibold">вы получите</span>:
      </p>
      <div className="flex flex-wrap gap-8 mt-12">
        {cards.map((card, i) => (
          <Card {...card} index={i + 1} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
