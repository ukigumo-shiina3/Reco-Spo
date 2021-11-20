import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Reco Spo</title>
        <meta property='og:title' content='Reco Spo' key='title' />
      </Head>

      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
}

export default MyApp;
