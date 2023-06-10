import React, { FC } from 'react';
import BenefitsCard from '../../../../entities/home-page/BenefitsCard';
import { useTranslate } from '../../../../features/locale';

import settings from '../model/locale/translate';

const Benefits: FC = () => {
  const { t } = useTranslate(settings);

  return (
    <div
      className="max-w-[1220px] mx-auto pt-20 lg:pt-36 max-sm:px-5 max-xl:px-10"
      id="benefits"
    >
      <h3 className="uppercase text-2xl sm:text-3xl font-bold">{t('title')}</h3>
      <p className="opacity-50 font-light mt-2 sm:mt-3">{t('description')}</p>

      <div className="flex flex-wrap gap-4 sm:gap-8 pt-8 sm:pt-10 lg:pt-14">
        {t('cards').map((item: any) => (
          <BenefitsCard {...item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
