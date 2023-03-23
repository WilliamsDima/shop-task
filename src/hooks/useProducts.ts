import { ProductContext } from '@context/Products/productContext'
import { useContext } from 'react'

export const useProducts = () => {
  return useContext(ProductContext)
}
