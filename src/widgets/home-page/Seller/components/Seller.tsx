import React, { FC } from 'react';

import background from 'public/images/bg-lines-seller.png';
import backgroundBlur from 'public/images/bg-seller-blur.png';
import backgroundScreens from 'public/images/bg-seller-screens.png';
import SellerInput from '../../../../entities/home-page/SellerInput';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslate } from '../../../../features/locale';

import settings from '../model/locale/translate.json';

const Seller: FC = () => {
  const isLargerThan1024 = useMediaQuery('(min-width: 1024px)');
  const isLargerThan1600 = useMediaQuery('(min-width: 1600px)');
  const { t } = useTranslate(settings);

  return (
    <div
      style={{
        backgroundImage: `url('${background.src}'), url('${backgroundBlur.src}')`,
        backgroundPositionX: '100%, 100%',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundSize: isLargerThan1600 ? '100%, 100%' : undefined,
      }}
    >
      <div
        className="py-20 lg:py-36"
        style={
          isLargerThan1024
            ? {
                backgroundImage: `url('${backgroundScreens.src}')`,
                backgroundPositionX: 'right',
                backgroundRepeat: 'no-repeat',
              }
            : undefined
        }
      >
        <div className="max-w-[1220px] mx-auto max-sm:px-5 max-xl:px-10">
          <h3 className="uppercase text-2xl sm:text-3xl font-bold max-w-lg">
            {t('title')}
          </h3>
          <p className="opacity-50 font-light max-w-md mt-2 sm:mt-3">
            {t('description')}
          </p>

          <SellerInput className="mt-10" />
        </div>
      </div>
    </div>
  );
};

export default Seller;
