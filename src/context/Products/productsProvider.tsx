import { IProduct } from '@appTypes/products'
import { useState, ReactElement, FC, useMemo } from 'react'
import { ProductContext } from './productContext'

type ProductsProviderType = {
  children: ReactElement
}

export const ProductsProvider: FC<ProductsProviderType> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const pageSize = 12

  const value = useMemo(() => {
    return {
      products,
      setProducts,
      loading,
      setLoading,
      page,
      setPage,
      pageSize,
    }
  }, [products, loading, page, pageSize])

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}
