import { FC, ReactNode } from 'react'
import styles from './style.module.scss'
import { clsx } from 'clsx'

type badge = {
  children: ReactNode
  type?: 'top' | 'new' | string
  anim?: boolean
}

const Badge: FC<badge> = ({ children, type = '', anim }) => {
  return (
    <div
      className={clsx(`${styles.badge} ${styles[type] || ''}`, {
        [styles.anim]: anim,
      })}
    >
      <p className={styles.badgeText}>{children}</p>
    </div>
  )
}

export default Badge
