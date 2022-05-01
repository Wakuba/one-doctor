import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className='font-body' lang='ja' prefix='og: http://ogp.me/ns#'>
        <Head>
          <link
            rel='icon'
            type='image/png'
            href='/images/favicon.png'
            sizes='32×32'
          />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
