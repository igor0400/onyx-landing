import classNames from 'classnames';
import Image from 'next/image';
import React, { FC } from 'react';
import { useAnimateOnScroll } from '../../../../shared';
import { useMediaQuery } from '@chakra-ui/react';

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
  const [isLargerThan1400] = useMediaQuery('(min-width: 1400px)');
  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');
  const [isLargerThan640] = useMediaQuery('(min-width: 640px)');

  if (isLargerThan640) {
    useAnimateOnScroll(
      `#anim_screen_${float}_${id}`,
      `animate__fadeIn${float === 'left' ? 'Right' : 'Left'}`,
    );
  }

  return (
    <div
      className={classNames('flex items-end', {
        'mt-20 sm:mt-36': mt,
        'justify-end': float === 'left',
        'justify-start': float === 'right',
      })}
    >
      <div
        className={classNames(
          'flex max-2xl:w-full max-2xl:justify-between max-2xl:gap-8 items-end',
          {
            'max-[1000px]:flex-col-reverse': float === 'left',
            'max-[1000px]:flex-col': float === 'right',
          },
        )}
      >
        {float === 'right' && (
          <Image
            src={imageUrl}
            alt="screen"
            id={`anim_screen_right_${id}`}
            className="animate__animated animate__fast max-[1000px]:mr-auto"
            width={
              isLargerThan1400
                ? undefined
                : isLargerThan1200
                ? 700
                : isLargerThan640
                ? 500
                : 300
            }
          />
        )}

        <div
          className={classNames('max-w-md sm:mb-16 px-5 sm:px-10', {
            '2xl:mr-36 max-[1000px]:mr-auto': float === 'left',
            '2xl:ml-36 max-[1000px]:ml-auto': float === 'right',
          })}
        >
          <h5 className="text-2xl sm:text-3xl font-bold pb-2 uppercase">
            {title}
          </h5>
          <p className="font-light">{description}</p>
        </div>

        {float === 'left' && (
          <Image
            src={imageUrl}
            alt="screen"
            id={`anim_screen_left_${id}`}
            className="animate__animated animate__fast max-[1000px]:ml-auto"
            width={
              isLargerThan1400
                ? undefined
                : isLargerThan1200
                ? 700
                : isLargerThan640
                ? 500
                : 300
            }
          />
        )}
      </div>
    </div>
  );
};

export default ScreensCard;
