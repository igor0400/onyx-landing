import Head from 'next/head';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title?: string;
}

const PageWrapper: FC<Props> = ({ children, title }) => {
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
      <div className="h-full">{children}</div>
    </>
  );
};

export default PageWrapper;
