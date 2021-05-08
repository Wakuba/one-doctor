import React from 'react'
import type { AppProps /*, AppContext */ } from 'next/app'

import FowerSettings from '../fower.config'
FowerSettings()

const MyApp = ({ Component, pageProps }: AppProps) => ( <Component {...pageProps} /> )


export default MyApp
