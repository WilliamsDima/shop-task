import Meta from '@atoms/Meta'
import Header from '@organisms/Header'
import React, { FC, ReactNode, useEffect } from 'react'
import styles from './style.module.scss'

type Page = {
  children: ReactNode
}

const Layout: FC<Page> = ({ children }) => {
  useEffect(() => {}, [])
  return (
    <div className={styles.container}>
      <Meta />

      <main className={styles.content}>
        <Header />
        {children}
      </main>
    </div>
  )
}

export default Layout
