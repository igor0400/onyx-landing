import React, { FC } from 'react';
import { Button } from '../../../../shared';
import classNames from 'classnames';

interface Props {
  className?: string;
}

const SellerInput: FC<Props> = ({ className }) => {
  return (
    <div
      className={classNames('flex max-[450px]:flex-col max-[450px]:gap-2', {
        [className ?? '']: className,
      })}
    >
      <input
        type="text"
        placeholder="Введите Email"
        className="rounded-xl border border-white bg-inherit text-sm py-3 pl-4 pr-4 min-[450px]:pr-8 min-[450px]:w-80"
      />
      <Button bgColor="#EF3F54" className="min-[450px]:-ml-5">
        Подписаться
      </Button>
    </div>
  );
};

export default SellerInput;
