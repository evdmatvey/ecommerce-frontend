import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="ru">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
