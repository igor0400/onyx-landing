import React, { FC } from 'react';

import background from 'public/images/bg-lines-seller.png';
import backgroundBlur from 'public/images/bg-seller-blur.png';
import backgroundScreens from 'public/images/bg-seller-screens.png';
import SellerInput from '../../../../entities/home-page/SellerInput';
import useMediaQuery from '@mui/material/useMediaQuery';

const Seller: FC = () => {
  const isLargerThan1024 = useMediaQuery('(min-width: 1024px)');

  return (
    <div
      style={{
        backgroundImage: `url('${background.src}'), url('${backgroundBlur.src}')`,
        backgroundPositionX: '100%, 100%',
        backgroundRepeat: 'no-repeat, no-repeat',
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
            Получайте первым информацию о внедрении новых бесплатных модулях
          </h3>
          <p className="opacity-50 font-light max-w-md mt-2 sm:mt-3">
            Получайте информацию о новых функциях, модулях и новостях,
            подписавшись на рассылку.
          </p>

          <SellerInput className="mt-10" />
        </div>
      </div>
    </div>
  );
};

export default Seller;
