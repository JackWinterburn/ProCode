import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Navbar } from "./components/Navbar";
import "@fontsource/ubuntu";

const theme = extendTheme({
  fonts: {
    heading: "Ubuntu",
    body: "Ubuntu",
  }
})

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
