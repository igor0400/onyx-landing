import classNames from 'classnames';
import React, { CSSProperties, FC, ReactNode } from 'react';

interface Props {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  bgColor?: string;
  borderColor?: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({
  className,
  style,
  children,
  bgColor,
  borderColor,
  onClick,
}) => {
  return (
    <button
      className={classNames('uppercase rounded-md py-2.5 px-12', {
        [className ?? '']: className,
        [`bg-${bgColor}`]: bgColor,
        [`border border-${borderColor}`]: borderColor,
      })}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
