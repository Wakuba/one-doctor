import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import ErrorBoundary from '../components/ErrorBoundary'
import { Provider } from 'react-redux'
import { store } from '../lib/store'
import { useEffect, useState, VFC } from 'react'

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
  // hydration error に対する解決策
  const [isSSR, setIsSSR] = useState(true)
  useEffect(() => {
    setIsSSR(false)
  })
  return (
    !isSSR ? <>
      <Head>
        <title>one doctor</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ErrorBoundary>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ErrorBoundary>
    </>:<></>
  )
}

export default MyApp
