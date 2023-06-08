import React, { FC } from 'react';
import { Drawer } from 'antd';
import { MenuIcon } from '../../../shared';

import CloseIcon from '@mui/icons-material/Close';
import Navbar from './Navbar';
import Toolbar from './Toolbar';

interface Props {
  className?: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const Menu: FC<Props> = ({ isMenuOpen, setIsMenuOpen, className }) => {
  const onClose = () => setIsMenuOpen(false);
  const onOpen = () => setIsMenuOpen(true);

  return (
    <>
      <MenuIcon className={className} onClick={onOpen} />
      <Drawer
        title="Навигация"
        placement="right"
        onClose={onClose}
        open={isMenuOpen}
        style={{ background: '#14141c' }}
        headerStyle={{ display: 'none' }}
        width={320}
        className="xl:hidden"
      >
        <CloseIcon
          className="-ml-4 cursor-pointer"
          style={{ color: '#fff' }}
          onClick={onClose}
        />
        <Navbar className="mt-6 w-fit" />
        <Toolbar className="sm:hidden mt-5 flex flex-col gap-5" />
      </Drawer>
    </>
  );
};

export default Menu;
