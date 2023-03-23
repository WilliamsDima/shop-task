import clsx from 'clsx'
import {
  FC,
  ReactNode,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  useEffect,
} from 'react'
import styles from './style.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeButton?: 'default' | 'success' | 'danger'
  size?: 'large' | 'small'
  block?: boolean
}

const Button: FC<IButton> = (props) => {
  const {
    children,
    typeButton = 'default',
    size = 'small',
    block = false,
    className,
    ...rest
  } = props

  const classBtn = clsx(
    styles.btn,
    styles[typeButton] || '',
    styles[size] || '',
    styles.btn,
    styles[typeButton] || '',
    styles[size] || '',
    className,
    {
      [styles.block]: block,
    }
  )

  useEffect(() => {}, [typeButton])
  return (
    <button {...rest} className={classBtn}>
      {children}
    </button>
  )
}

export default Button
