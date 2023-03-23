import { IProduct } from '@appTypes/products'
import { createContext } from 'react'

type IContext = {
  products: IProduct[]
  setProducts: (products: IProduct[]) => void
  loading: boolean
  setLoading: (value: boolean) => void
  page: number
  setPage: (page: number) => void
  pageSize: number
}

export const ProductContext = createContext<IContext>({} as IContext)
