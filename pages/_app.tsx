import type { AppProps } from "next/app";
import Head from "next/head";
import { config } from '@fortawesome/fontawesome-svg-core'
import Layout from "../src/components/layout";
import "../src/styles/globals.scss";
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css';
import 'react-loading-skeleton/dist/skeleton.css';

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Enola News</title>
        <meta name="description" content="Enola news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
