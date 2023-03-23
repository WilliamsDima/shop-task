import Button from '@atoms/Button'
import Title from '@atoms/Title'
import { useProducts } from '@hooks/useProducts'
import Pagination from '@molecules/Pagination'
import Products from '@organisms/Products'
import React, { FC, useEffect } from 'react'
import styles from './style.module.scss'

type Page = {}

const HomeTemplate: FC<Page> = ({}) => {
  const { products, page, setPage, pageSize } = useProducts()

  useEffect(() => {}, [products])
  return (
    <div className={styles.container}>
      <Products />
      {!!products.length && (
        <Pagination
          list={products}
          currentPage={page}
          setPage={setPage}
          pageSize={pageSize}
        />
      )}
    </div>
  )
}

export default HomeTemplate
