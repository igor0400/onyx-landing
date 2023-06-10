import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="py-12 px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 opacity-70 text-base font-light min-max-width">
      <Link href="/">Политика использования</Link>
      <Link href="/">Лицензионное соглашение</Link>
      <Link href="/">Политика конфиденциальности</Link>
      <Link href="/">Обработка персональных данных</Link>
    </footer>
  );
};

export default Footer;
