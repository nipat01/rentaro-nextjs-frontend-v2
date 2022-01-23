import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Rentaro</title>
        <meta name="description" content="Rentaro Platform" />
        <link rel="icon" href="/rentaro-icon-icon.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
