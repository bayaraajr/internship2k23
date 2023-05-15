import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { Rubik } from 'next/font/google';
const inter = Rubik({ subsets: ['cyrillic'] });

export default function App({ Component, pageProps }: AppProps) {
  return <main className={inter.className}>
    <AnimatePresence mode="wait" initial={false}>
      <Component  {...pageProps} />
    </AnimatePresence>
  </main>
}
