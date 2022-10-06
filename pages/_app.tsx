import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return <Fragment>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </Fragment>
}

export default MyApp
