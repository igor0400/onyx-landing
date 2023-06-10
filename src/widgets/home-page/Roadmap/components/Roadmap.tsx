import React, { FC } from 'react';
import Slider from './Slider';
import { useTranslate } from '../../../../features/locale';

import settings from '../model/locale/translate.json';

const Roadmap: FC = () => {
  const { t } = useTranslate(settings);

  return (
    <div
      className="max-w-[1220px] mx-auto py-20 lg:py-36 max-sm:px-5 max-xl:px-10"
      id="roadmap"
    >
      <h3 className="uppercase text-2xl sm:text-3xl font-bold">{t('title')}</h3>
      <p className="opacity-50 font-light max-w-md mt-2 sm:mt-3">
        {t('description')}
      </p>

      <Slider />
    </div>
  );
};

export default Roadmap;
