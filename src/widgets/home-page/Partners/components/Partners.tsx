import React, { FC } from 'react';
import { partners } from '../configs/partners';
import PartnerCard from '../../../../entities/home-page/PartnerCard';
import { useTranslate } from '../../../../features/locale';

import settings from '../model/locale/translate.json';

const Partners: FC = () => {
  const { t } = useTranslate(settings);

  return (
    <div className="max-w-[1220px] mx-auto py-20 lg:py-36 max-sm:px-5 max-xl:px-10">
      <h3 className="uppercase text-2xl sm:text-3xl font-bold">{t('title')}</h3>
      <p className="opacity-50 font-light mt-2 sm:mt-3">{t('description')}</p>
      <div
        className="grid gap-4 sm:gap-8 mt-8 sm:mt-12"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
      >
        {partners.map((item) => (
          <PartnerCard {...item} key={item.alt} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
