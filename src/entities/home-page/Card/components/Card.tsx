import Image from 'next/image';
import React, { FC } from 'react';

interface Props {
  iconUrl: any;
  text: string;
  index: number;
}

const Card: FC<Props> = ({ index, iconUrl, text }) => {
  return (
    <div
      className="p-6 rounded-2xl w-[280px] h-[320px] flex flex-col justify-between"
      style={{ background: '#242431' }}
    >
      <h6 className="opacity-20 text-5xl">{index}</h6>
      <Image src={iconUrl} alt="icon" />
      <p className="opacity-90 text-lg">{text}</p>
    </div>
  );
};

export default Card;
