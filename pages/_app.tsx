import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ProductsProvider } from '@context/Products/productsProvider'

function App({ Component, pageProps }: AppProps) {
  return (
    <ProductsProvider>
      <Component {...pageProps} />
    </ProductsProvider>
  )
}
export default App
