import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="py-12 px-6 flex flex-wrap justify-center gap-8 opacity-70 text-base font-light">
      <Link href="/">Политика использования</Link>
      <Link href="/">Лицензионное соглашение</Link>
      <Link href="/">Политика конфиденциальности</Link>
      <Link href="/">Обработка персональных данных</Link>
    </footer>
  );
};

export default Footer;
