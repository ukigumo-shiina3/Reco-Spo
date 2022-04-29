import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import NextHeadSeo from 'next-head-seo';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { MantineProvider } from '@mantine/core';
import {
  RecoilRoot
} from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextHeadSeo
        og={{
          type: 'article',
          siteName: 'Reco Spo',
        }}
      />
      <Head>
        <title>Reco Spo</title>
        <meta property='og:title' content='Reco Spo' key='title' />
      </Head>
      <RecoilRoot>
        <MantineProvider>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </MantineProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
