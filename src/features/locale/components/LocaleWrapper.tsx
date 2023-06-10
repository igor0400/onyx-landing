import React, { FC, ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { changeLang } from '../model/store/localeStore';
import { locales } from '../configs/settings';

interface Props {
  children: ReactNode;
}

const LocaleWrapper: FC<Props> = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const lang: any = router.locale;

    if (locales.includes(lang ?? '')) {
      dispatch(changeLang(lang ?? 'ru'));
      localStorage.setItem('locale', lang ?? 'ru');
    }
  }, [router.locale]);

  return <>{children}</>;
};

export default LocaleWrapper;
