import classNames from 'classnames';
import Image from 'next/image';
import React, { FC } from 'react';

interface Props {
  title: string;
  description: string;
  imageUrl: any;
  float: 'right' | 'left';
  mt?: boolean;
}

const ScreensCard: FC<Props> = ({
  title,
  description,
  imageUrl,
  float,
  mt = true,
}) => {
  return (
    <div
      className={classNames('flex items-end', {
        'mt-36': mt,
        'justify-end': float === 'left',
        'justify-start': float === 'right',
      })}
    >
      <div className="flex items-end">
        {float === 'right' && <Image src={imageUrl} alt="screen" />}

        <div
          className={classNames('max-w-md mb-16', {
            'mr-36': float === 'left',
            'ml-36': float === 'right',
          })}
        >
          <h5 className="text-3xl font-bold pb-2 uppercase">{title}</h5>
          <p className="font-light">{description}</p>
        </div>

        {float === 'left' && <Image src={imageUrl} alt="screen" />}
      </div>
    </div>
  );
};

export default ScreensCard;
