import { FC, ReactNode } from 'react'
import styles from './style.module.scss'

interface IEmpty {
  children: ReactNode
}

const EmptyList: FC<IEmpty> = ({ children }) => {
  return <div className={styles.empty}>{children}</div>
}

export default EmptyList
