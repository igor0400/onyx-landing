import { FC, useState } from 'react';
import Menu from './Menu';
import Navbar from './Navbar';
import Toolbar from './Toolbar';
import Link from 'next/link';
import { useTypedSelector } from '../../../shared';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lang = useTypedSelector((state) => state.locales.lang);

  return (
    <div className="header-wrapper">
      <header className="header max-w-[1360px] mx-auto flex justify-between items-center px-10">
        <Link href={`/${lang}`}>
          <h6 className="uppercase text-4xl sm:text-5xl logo">onyx</h6>
        </Link>

        <Navbar className="max-xl:hidden" />

        <div className="flex items-center gap-4">
          <Toolbar className="flex gap-4 items-center max-sm:hidden" />
          <Menu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            className="xl:hidden w-min"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
