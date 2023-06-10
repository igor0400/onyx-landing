import React, { FC } from 'react';
import { Button } from '../../../../shared';
import classNames from 'classnames';
import { useTranslate } from '../../../../features/locale';

import { translateSettings } from '../../../../widgets/home-page/Seller';

interface Props {
  className?: string;
}

const SellerInput: FC<Props> = ({ className }) => {
  const { t } = useTranslate(translateSettings);

  return (
    <div
      className={classNames('flex max-[450px]:flex-col max-[450px]:gap-2', {
        [className ?? '']: className,
      })}
    >
      <input
        type="text"
        placeholder={t('inputText')}
        className="rounded-xl border border-white bg-inherit text-sm py-3 pl-4 pr-4 min-[450px]:pr-8 min-[450px]:w-80"
      />
      <Button bgColor="#EF3F54" className="min-[450px]:-ml-5">
        {t('button')}
      </Button>
    </div>
  );
};

export default SellerInput;
