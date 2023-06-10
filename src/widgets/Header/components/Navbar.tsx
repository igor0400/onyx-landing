import React, { FC } from 'react';
import { navs } from '../configs/navs';
import { Link, animateScroll as scroll } from 'react-scroll';

interface Props {
  className?: string;
}

const Navbar: FC<Props> = ({ className }) => {
  return (
    <nav className={className}>
      <ul className="flex max-xl:flex-col gap-5 uppercase font-light">
        {navs.map(({ title, link }) => (
          <React.Fragment key={title}>
            {link === '/' ? (
              <div
                onClick={() => scroll.scrollToTop()}
                className="cursor-pointer"
              >
                <li>{title}</li>
              </div>
            ) : (
              <Link
                to={link.replace('/#', '')}
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                <li>{title}</li>
              </Link>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
