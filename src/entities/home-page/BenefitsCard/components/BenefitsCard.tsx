import classNames from 'classnames';
import Image from 'next/image';
import React, { FC } from 'react';

interface Props {
  title: string;
  description: string;
  imageUrl?: any;
  marginTop?: number;
  grow?: boolean;
}

const BenefitsCard: FC<Props> = ({
  title,
  description,
  imageUrl,
  marginTop = 0,
  grow,
}) => {
  return (
    <div
      className={classNames(
        'rounded-2xl px-4 sm:px-8 flex justify-between items-end gap-10 assent-bg',
        {
          'w-full xl:w-[1220px]': grow,
          'w-full min-[1180px]:max-xl:basis-[48.5%] xl:w-[594px]': !grow,
        },
      )}
    >
      <div className="py-4 sm:py-8 max-w-2xl my-auto">
        <h5 className="text-lg sm:text-xl font-semibold pb-1">{title}</h5>
        <p className="opacity-70 font-light">{description}</p>
      </div>

      {imageUrl && (
        <Image
          src={imageUrl}
          alt="image"
          style={{ marginTop: `${marginTop}rem` }}
          className="max-lg:hidden"
        />
      )}
    </div>
  );
};

export default BenefitsCard;
