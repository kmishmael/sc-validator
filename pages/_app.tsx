import '@sc-validator/styles/global.css';
import Layout from '@sc-validator/components/Layout';
import { AppProps } from "next/app";
import Head from 'next/head';

export default function App({Component, pageProps}: AppProps){
    return (
        <>
        <Head>
            <meta charSet="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="HandheldFriendly" content="True" />
            <meta name="MobileOptimized" content="320" />
            <meta name="viewport" content="width=device-width,minimum-scale=1" />
            <meta name="robots" content="index, follow" />
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            <meta name="theme-color" content="#212f80" />
            <link rel="manifest" href="/manifest.json" />

        </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
        </>
    )
}