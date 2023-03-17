import type { AppProps } from 'next/app';
import Head from 'next/head';

import { LayoutProvider } from '@contexts/Layout';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title>Vista Jataí</title>
      </Head>
      <LayoutProvider>
        <Component {...pageProps} />
      </LayoutProvider>
    </>
  );
};

export default MyApp;
