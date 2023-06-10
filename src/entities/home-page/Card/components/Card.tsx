import Image from 'next/image';
import React, { FC } from 'react';

interface Props {
  iconUrl: any;
  text: string;
  index: number;
}

const Card: FC<Props> = ({ index, iconUrl, text }) => {
  return (
    <div className="p-5 sm:p-6 rounded-2xl h-[240px] sm:w-[220px] sm:h-[260px] lg:w-[280px] lg:h-[320px] flex flex-col justify-between assent-bg">
      <h6 className="opacity-20 text-4xl lg:text-5xl">{index}</h6>
      <Image src={iconUrl} alt="icon" />
      <p className="opacity-90 lg:text-lg">{text}</p>
    </div>
  );
};

export default Card;
