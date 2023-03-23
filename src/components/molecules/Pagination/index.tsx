import Button from '@atoms/Button'
import React, { FC, useEffect, useMemo, useState } from 'react'
import styles from './style.module.scss'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

type pagination = {
  list: any[]
  pageSize?: number
  currentPage: number
  setPage: (page: number) => void
}

const Pagination: FC<pagination> = ({
  list,
  pageSize = 12,
  setPage,
  currentPage,
}) => {
  const pagesCount = useMemo(() => {
    return Math.ceil(list.length / pageSize)
  }, [pageSize, list])

  const onPageChange = (page: number) => {
    setPage(page)
  }

  if (pagesCount === 1) return null
  const pages = useMemo(() => {
    return Array.from({ length: pagesCount }, (_, i) => i + 1)
  }, [pagesCount])

  useEffect(() => {}, [currentPage])

  return (
    <div className={styles.paginationWrapp}>
      <p className={styles.pageAll}>Всего страниц: {pagesCount}</p>
      <div className={styles.pagination}>
        <Button
          onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)}
        >
          <FiArrowLeft />
        </Button>
        <ul className={styles.pages}>
          {pages.map((p) => {
            return (
              <li className={styles.page} key={p}>
                <Button
                  typeButton={currentPage === p ? 'success' : 'default'}
                  onClick={() => onPageChange(p)}
                >
                  {p}
                </Button>
              </li>
            )
          })}
        </ul>

        <Button
          onClick={() =>
            onPageChange(
              currentPage < pagesCount ? currentPage + 1 : pagesCount
            )
          }
        >
          <FiArrowRight />
        </Button>
      </div>
    </div>
  )
}

export default Pagination
