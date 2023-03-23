import Button from '@atoms/Button'
import Title from '@atoms/Title'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import styles from './style.module.scss'

type header = {}

const Header: FC<header> = () => {
  const { push } = useRouter()
  const toHome = () => {
    push('/')
  }
  return (
    <header className={styles.header}>
      <Button className={styles.shop} onClick={toHome}>
        <Title type="large">Shop</Title>
      </Button>
    </header>
  )
}

export default Header
