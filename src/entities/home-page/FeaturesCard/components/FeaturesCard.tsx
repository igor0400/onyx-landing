import Image from 'next/image';
import React, { FC } from 'react';

interface Props {
  title: string;
  description: string;
  imageUrl: any;
  float: 'right' | 'left';
  marginTop?: number;
}

const FeaturesCard: FC<Props> = ({
  title,
  description,
  imageUrl,
  float,
  marginTop = 5,
}) => {
  return (
    <div
      className={
        'rounded-2xl px-4 sm:px-8 flex justify-between items-end lg:mt-14 min-h-[180px] assent-bg'
      }
    >
      {float === 'right' && (
        <Image
          src={imageUrl}
          alt="screen"
          style={{ marginTop: `-${marginTop}rem` }}
          className="max-lg:hidden"
        />
      )}

      <div className="py-4 sm:py-8 max-w-md my-auto">
        <h5 className="text-lg sm:text-xl font-semibold pb-1">{title}</h5>
        <p className="opacity-70 font-light">{description}</p>
      </div>

      {float === 'left' && (
        <Image
          src={imageUrl}
          alt="screen"
          className="xl:mr-10 max-lg:hidden"
          style={{ marginTop: `-${marginTop}rem` }}
        />
      )}
    </div>
  );
};

export default FeaturesCard;
