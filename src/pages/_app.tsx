import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AuthProvider } from '../lib/context'
import ErrorBoundary from '../components/ErrorBoundary'
import { VFC } from 'react'

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>one doctor</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ErrorBoundary>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ErrorBoundary>
    </>
  )
}

export default MyApp
