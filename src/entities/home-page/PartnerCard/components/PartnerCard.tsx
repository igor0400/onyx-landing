import Image from 'next/image';
import React, { FC } from 'react';
import classNames from 'classnames';

interface Props {
  imageUrl: any;
  alt: string;
}

const PartnerCard: FC<Props> = ({ imageUrl, alt }) => {
  return (
    <div
      className="p-6 rounded-2xl w-[360px] h-[170px] flex flex-col justify-center items-center"
      style={{ background: '#242431' }}
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
