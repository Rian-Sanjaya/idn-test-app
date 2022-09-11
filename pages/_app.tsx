import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../src/components/layout";
import "../src/styles/globals.scss";

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
