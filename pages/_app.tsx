import Navigation from '@/components/navigation'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Navigation/>
      <Component {...pageProps}/>
    </Fragment>
  )

}
