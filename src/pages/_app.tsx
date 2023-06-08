import type { AppProps } from 'next/app';

import '../app/styles/global.scss';
import Header from '../widgets/Header';
import Footer from '../widgets/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="wrapper min-max-width">
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
