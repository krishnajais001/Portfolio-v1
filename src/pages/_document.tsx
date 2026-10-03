import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Fira+Code:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-[#0e0e0e] text-[#ededed] antialiased selection:bg-[#d4a843]/20 selection:text-[#ededed]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
