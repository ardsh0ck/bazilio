import { Link } from 'react-router-dom'
import clsx from 'clsx'
import styles from './Header.module.scss'
import Navigation from '../../organism/Navigation/Navigation'
import Button from '../../organism/Button/Button'
import ShoppingCart from '../../organism/ShoppingCart/ShoppingCart'
import SideMenu from '../../organism/SideMenu/SideMenu'
import { ReactComponent as Logo } from '../../../assets/images/svg/logo.svg'
import contacts from '../../../data/contacts'

const Header = ({ navigation }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerTopline}>
        <div className={clsx(styles.headerToplineInner, 'inner')}>
          <ul className={styles.headerToplineContacts}>
            <li>{contacts.address}</li>
            <li>Працюємо для вас {contacts.weekDaysHours}</li>
          </ul>

          <ul className={styles.headerToplineSocials}>
            <li>
              <Button
                href="facebook.com"
                size="small"
                color="gray"
                icon="icon-facebook"
                className={styles.headerToplineSocialsFacebook}
              />
            </li>
            <li>
              <Button
                type="link"
                href="https://www.instagram.com/bazilio_prk/"
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
            {contacts.phone}
          </Link>
        </div>
      </div>

      <div className={clsx(styles.headerInner, 'inner')}>
        <Link to="/" className={styles.headerLogo}>
          <Logo />
        </Link>

        <Navigation
          className={styles.headerNavigation}
          navigation={navigation}
        />

        <div className="flex items-center gap-2">
          <ShoppingCart />
          <SideMenu />
        </div>
      </div>
    </header>
  )
}

export default Header
