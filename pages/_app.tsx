import React  from 'react'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps /*, AppContext */ } from 'next/app'
import { useMediaQuery } from '../lib/CustomHooks'
import ScreenWidthContext from '../contexts/ScreenWidthContext'
import { WIDTH_THRESHOLD } from '../lib/variables'


const MyApp = ({ Component, pageProps }: AppProps) => { 
    let isPageSmall = useMediaQuery(`(max-width: ${WIDTH_THRESHOLD}px`)
    return (
        <>
            <Head>
                <link rel='one doctor logo' href='/images/favicon.iso'/>
                <title>one doctor</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <ScreenWidthContext.Provider value={isPageSmall}>
                <Component {...pageProps} /> 
            </ScreenWidthContext.Provider>
        </>
    )
}


export default MyApp
