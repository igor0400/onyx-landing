import React, { FC } from 'react';
import FeaturesCard from '../../../../entities/home-page/FeaturesCard';
import { useTranslate } from '../../../../features/locale';

import settings from '../model/locales/translate';

const Features: FC = () => {
  const { t } = useTranslate(settings);

  return (
    <div
      className="max-w-[1220px] mx-auto pt-20 lg:pt-36 max-sm:px-5 max-xl:px-10"
      id="features"
    >
      <h3 className="uppercase text-2xl sm:text-3xl font-bold">{t('title')}</h3>
      <p className="opacity-50 font-light mt-3">{t('description')}</p>
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10 max-sm:mt-8 max-lg:mt-10">
        {t('cards').map((item: any) => (
          <FeaturesCard {...item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Features;
