import React, { FC } from 'react';
import { Button } from '../../../shared';

interface Props {
  className?: string;
}

const Toolbar: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex gap-1 h-fit">
        <button className="opacity-50">EN</button>
        <span className="opacity-50">/</span>
        <button className="font-semibold">RU</button>
      </div>
      <Button className="w-fit" style={{ border: '1px solid #EF3F54' }}>
        войти
      </Button>
    </div>
  );
};

export default Toolbar;
