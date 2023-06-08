import Link from 'next/link';
import React, { FC } from 'react';
import { navs } from '../configs/navs';

interface Props {
  className?: string;
}

const Navbar: FC<Props> = ({ className }) => {
  return (
    <nav className={className}>
      <ul className="flex max-xl:flex-col gap-5 uppercase font-light">
        {navs.map(({ title, link }) => (
          <Link href={link} key={title}>
            <li>{title}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
