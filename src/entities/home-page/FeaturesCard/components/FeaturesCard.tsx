import Image from 'next/image';
import React, { FC } from 'react';

interface Props {
  title: string;
  description: string;
  imageUrl: any;
  float: 'right' | 'left';
}

const FeaturesCard: FC<Props> = ({ title, description, imageUrl, float }) => {
  return (
    <div
      className="rounded-2xl px-8 flex justify-between items-end mt-14 min-h-[180px]"
      style={{ background: '#242431' }}
    >
      {float === 'right' && (
        <Image src={imageUrl} alt="screen" className="-mt-20" />
      )}

      <div className="py-8 max-w-md">
        <h5 className="text-xl font-semibold pb-1">{title}</h5>
        <p className="opacity-70 font-light">{description}</p>
      </div>

      {float === 'left' && (
        <Image src={imageUrl} alt="screen" className="-mt-20" />
      )}
    </div>
  );
};

export default FeaturesCard;
