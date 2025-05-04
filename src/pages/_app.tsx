import type { AppProps } from 'next/app';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const hoge = 2;
  return <Component {...pageProps} />;
}
