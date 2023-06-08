import Head from 'next/head';
import { FC, ReactNode } from 'react';
import classNames from 'classnames';

interface Props {
  children: ReactNode;
  withMinMax?: boolean;
  title?: string;
}

const PageWrapper: FC<Props> = ({ children, title, withMinMax = true }) => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#14141c" />
        <meta property="og:url" content="https://onyx24.online" />
        <meta property="og:site_name" content="Onyx" />
        <link
          crossOrigin="use-credentials"
          rel="manifest"
          href="/manifest.json"
        />
        <title>{title ?? 'ONYX'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={classNames('h-full', {
          'min-max-width': withMinMax,
        })}
      >
        {children}
      </div>
    </>
  );
};

export default PageWrapper;
