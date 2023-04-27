import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'
import { ReactComponent as Logo } from '../../../assets/images/svg/logo.svg'
import clsx from 'clsx'

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li className={styles.navigationItem}>
          <Link
            to={'/'}
            className={clsx(styles.navigationLink, styles.navigationLogo)}
          >
            <Logo />
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="pizza" className={styles.navigationLink}>
            Піца
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="salads" className={styles.navigationLink}>
            Салати
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="drinks" className={styles.navigationLink}>
            Напої
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="actions" className={styles.navigationLink}>
            Акції
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="contacts" className={styles.navigationLink}>
            Контакти
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="delivery" className={styles.navigationLink}>
            Доставка
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
