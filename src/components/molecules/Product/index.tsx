import { IProduct } from '@appTypes/products'
import Badge from '@atoms/Badge'
import Image from 'next/image'
import React, { FC, useEffect } from 'react'
import styles from './style.module.scss'

type product = {
  product: IProduct
}

const Product: FC<product> = ({ product }) => {
  const myLoader = () => {
    return product.src
  }
  return (
    <li className={styles.product}>
      <div className={styles.imgWrapper}>
        <Image
          loader={myLoader}
          src=".webp"
          alt={product.name}
          width={300}
          height={300}
        />
      </div>

      {product.badge && (
        <div className={styles.badgeWrapper}>
          <Badge anim={product.badge === 'new'} type={product.badge}>
            {product.badge}
          </Badge>
        </div>
      )}

      <div className={styles.productContent}>
        <p className={styles.productName}>{product.name}</p>
        <p className={styles.productBrand}>Brand: {product.brand}</p>
      </div>
    </li>
  )
}

export default Product
