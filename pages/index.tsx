import { IProduct } from '@appTypes/products'
import { useProducts } from '@hooks/useProducts'
import HomeTemplate from '@templates/Home'
import Layout from '@templates/Layout'
import { FC, useEffect } from 'react'
import products from 'src/services/products'
import style from '../styles/index.module.css'

type home = {
  products: IProduct[]
}

const Home: FC<home> = ({ products }) => {
  const { setProducts, setLoading } = useProducts()

  useEffect(() => {
    setLoading(true)
    setProducts(products)
  }, [])
  return (
    <Layout>
      <HomeTemplate />
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await products.getProducts()

  return {
    props: { products: data }, // will be passed to the page component as props
  }
}

export default Home
