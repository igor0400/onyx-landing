import Image from 'next/image';
import React, { FC } from 'react';
import classNames from 'classnames';

interface Props {
  imageUrl: any;
  alt: string;
  theme?: 'dark' | 'light';
}

const PartnerCard: FC<Props> = ({ imageUrl, alt, theme = 'dark' }) => {
  return (
    <div
      className="p-6 rounded-2xl h-[170px] flex flex-col justify-center items-center"
      style={{ background: theme === 'dark' ? '#242431' : '#fff' }}
    >
      <Image
        src={imageUrl}
        alt={alt}
        className={classNames('', {
          '-mb-8': alt === 'hyperX',
        })}
      />
    </div>
  );
};

export default PartnerCard;
