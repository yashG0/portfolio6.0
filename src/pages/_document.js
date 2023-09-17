import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Yash's Portfolio</title>
        <link rel="icon" href="/logo1.png" /> {/* Use a relative path */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
