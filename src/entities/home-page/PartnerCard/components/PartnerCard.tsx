import Image from 'next/image';
import React, { FC } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

interface Props {
  imageUrl: any;
  alt: string;
  site: string;
  theme?: 'dark' | 'light';
}

const PartnerCard: FC<Props> = ({ imageUrl, alt, site, theme = 'dark' }) => {
  return (
    <Link href={site}>
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
    </Link>
  );
};

export default PartnerCard;
