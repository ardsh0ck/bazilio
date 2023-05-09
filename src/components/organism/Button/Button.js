import clsx from 'clsx'
import styles from './Button.module.scss'
import { Icons } from '../Icons/Icons'
import { Link } from 'react-router-dom'

const Button = ({
  type,
  size,
  color,
  text,
  icon,
  onClickHendler,
  href,
  className,
}) => {
  return (
    <>
      {href ? (
        <Link
          className={clsx(
            styles.button,
            {
              [styles.buttonPrimary]: color === 'orange',
              [styles.buttonSecondary]: color === 'gray',
              [styles.buttonSmall]: size === 'small',
            },
            className
          )}
          to={href}
        >
          {text}
          {icon && <Icons name={icon} />}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClickHendler}
          className={clsx(
            styles.button,
            {
              [styles.buttonPrimary]: color === 'orange',
              [styles.buttonSecondary]: color === 'gray',
            },
            className
          )}
        >
          {text}
          {icon && <Icons name={icon} />}
        </button>
      )}
    </>
  )
}

export default Button
