import { Html, Head, Main, NextScript } from 'next/document'
import Analytics from '../../components/GoogleAnalytics'

export default function Document() {
  return (
    <Html lang="PT-br">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  )
}
