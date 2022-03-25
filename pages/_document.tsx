import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="smooth-scroll">
      <Head />
      <body className="bg-white text-black dark:bg-gray-900 dark:text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
