import { FC, ReactNode, HTMLAttributes } from 'react'
import styles from './style.module.scss'

interface ITitle extends HTMLAttributes<HTMLHRElement> {
  children: ReactNode
  type?: 'large' | 'small' | 'medium'
}

const Title: FC<ITitle> = (props) => {
  const { children, type = 'medium', className, ...rest } = props
  return (
    <h1
      className={`${styles.titlePage} ${styles[type]} ${className || ''}`}
      {...rest}
    >
      {children}
    </h1>
  )
}

export default Title
