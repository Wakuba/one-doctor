import React from 'react'
import Head from 'next/head'
import type { AppProps /*, AppContext */ } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <body style={{margin: '0px'}}/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
