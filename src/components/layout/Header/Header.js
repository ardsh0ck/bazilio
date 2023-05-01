import clsx from 'clsx'
import styles from './Header.module.scss'
import Navigation from '../../organism/Navigation/Navigation'
import Button from '../../organism/Button/Button'
import { Link } from 'react-router-dom'
import ShoppingCart from '../../organism/ShoppingCart/ShoppingCart'
import SideMenu from '../../organism/SideMenu/SideMenu'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerTopline}>
        <div className={clsx(styles.headerToplineInner, 'inner')}>
          <ul className={styles.headerToplineContacts}>
            <li>м.Прилуки, Київська 309</li>
            <li>Працюємо для вас з 10:00 до 21:30</li>
          </ul>

          <ul className={styles.headerToplineSocials}>
            <li>
              <Button
                type="link"
                size="small"
                color="gray"
                icon="icon-facebook"
                className={styles.headerToplineSocialsFacebook}
              />
            </li>
            <li>
              <Button
                type="link"
                size="small"
                color="gray"
                icon="icon-instagram"
                className={styles.headerToplineSocialsInstagram}
              />
            </li>
          </ul>

          <Link
            to="tel:+38 (063) 222-33-44"
            className={styles.headerToplinePhone}
          >
            +38 (063) 222-33-44
          </Link>
        </div>
      </div>

      <div className={clsx(styles.headerInner, 'inner')}>
        <Navigation />

        <div className="flex items-center gap-2">
          <ShoppingCart />
          <SideMenu />
        </div>
      </div>
    </header>
  )
}

export default Header
