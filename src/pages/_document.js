import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="PT-br">
      <Head />
      <body>
      <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-562NVWW"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
