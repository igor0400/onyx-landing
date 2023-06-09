import classNames from 'classnames';
import React, { FC, HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLInputElement> {
  className?: string;
}

const Input: FC<Props> = ({ type = 'text', className, ...args }) => {
  return (
    <div>
      <input
        type={type}
        className={classNames(
          'rounded-md border border-white bg-inherit text-sm py-3 px-4',
          {
            [className ?? '']: className,
          },
        )}
        {...args}
      />
    </div>
  );
};

export default Input;
