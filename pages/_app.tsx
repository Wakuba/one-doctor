import React  from 'react'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps /*, AppContext */ } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>one doctor</title>
                <link rel="icon" type="image/x-icon" href="/public/images/favicon.ico"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}


export default MyApp
