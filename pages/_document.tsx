import { Html, Head, Main, NextScript } from 'next/document';
import { bodyClass } from '@/styles/globalStyles.css';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={bodyClass}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
