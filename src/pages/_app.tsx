import type { AppProps } from 'next/app';
import Header from '../widgets/Header';
import Footer from '../widgets/Footer';

import '../app/styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
