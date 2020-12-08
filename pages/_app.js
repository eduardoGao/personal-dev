import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    background: white;
    font-family: 'Inter', sans-serif;
  }
`

const theme = {
  colors: {
    light: '#F7F7F7',
    dark: '#161616',
    gradientPrimary: 'linear-gradient(90deg, #DA22FF 0%, #9733EE 100%)'
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
