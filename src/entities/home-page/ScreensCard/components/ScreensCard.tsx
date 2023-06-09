import classNames from 'classnames';
import Image from 'next/image';
import React, { FC } from 'react';
import { useAnimateOnScroll } from '../../../../shared';

interface Props {
  id: number;
  title: string;
  description: string;
  imageUrl: any;
  float: 'right' | 'left';
  mt?: boolean;
}

const ScreensCard: FC<Props> = ({
  id,
  title,
  description,
  imageUrl,
  float,
  mt = true,
}) => {
  useAnimateOnScroll(
    `#anim_screen_${float}_${id}`,
    `animate__fadeIn${float === 'left' ? 'Right' : 'Left'}`,
  );

  return (
    <div
      className={classNames('flex items-end', {
        'mt-36': mt,
        'justify-end': float === 'left',
        'justify-start': float === 'right',
      })}
    >
      <div className="flex items-end">
        {float === 'right' && (
          <Image
            src={imageUrl}
            alt="screen"
            id={`anim_screen_right_${id}`}
            className="animate__animated animate__fast"
          />
        )}

        <div
          className={classNames('max-w-md mb-16', {
            'mr-36': float === 'left',
            'ml-36': float === 'right',
          })}
        >
          <h5 className="text-3xl font-bold pb-2 uppercase">{title}</h5>
          <p className="font-light">{description}</p>
        </div>

        {float === 'left' && (
          <Image
            src={imageUrl}
            alt="screen"
            id={`anim_screen_left_${id}`}
            className="animate__animated animate__fast"
          />
        )}
      </div>
    </div>
  );
};

export default ScreensCard;
