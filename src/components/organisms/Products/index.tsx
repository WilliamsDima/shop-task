import EmptyList from '@atoms/EmptyList'
import Title from '@atoms/Title'
import { paginate } from '@hooks/helpers'
import { useProducts } from '@hooks/useProducts'
import Product from '@molecules/Product'
import React, { FC, useEffect, useMemo } from 'react'
import styles from './style.module.scss'

type products = {}

const Products: FC<products> = ({}) => {
  const { products, page, pageSize } = useProducts()

  const productPagination = useMemo(() => {
    return paginate(products, page, pageSize)
  }, [page, products])

  return (
    <div className={styles.products}>
      <div className={styles.headerProduct}>
        <Title>Смартфоны</Title>
        <Title type="small">Всего товаров: {products.length || 0}</Title>
      </div>

      {!!productPagination.length ? (
        <ul className={styles.list}>
          {productPagination.map((p) => {
            return <Product key={p.id.toString()} product={p} />
          })}
        </ul>
      ) : (
        <EmptyList>
          <Title>Товаров нет</Title>
        </EmptyList>
      )}
    </div>
  )
}

export default Products
