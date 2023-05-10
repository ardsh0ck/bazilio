import { Link } from 'react-router-dom'
import clsx from 'clsx'
import styles from './Footer.module.scss'
import Button from '../../organism/Button/Button'
import contacts from '../../../data/contacts'
import { ReactComponent as Logo } from '../../../assets/images/svg/logo.svg'

const Footer = ({ navigation }) => {
  return (
    <footer className={styles.footer}>
      <div className={clsx(styles.footerInner, 'inner')}>
        <div className={styles.footerInnerItem}>
          <h6 className={styles.footerLabel}>Навігація</h6>
          <ul className={clsx(styles.footerList, styles.footerListNavigation)}>
            {navigation.map((link, index) => {
              return (
                <li
                  className={styles.footerListItem}
                  key={'footerNavItem' + index}
                >
                  <Link to={link.url} className={styles.footerNavigationLink}>
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div className={styles.footerInnerItem}>
          <h6 className={styles.footerLabel}>Контакти</h6>
          <ul className={styles.footerList}>
            <li className={styles.footerListItem}>{contacts.address}</li>
            <li className={styles.footerListItem}>
              <Link to="tel:+38 063 222 33 44">{contacts.phone}</Link>
            </li>
            <li className={styles.footerListItem}>{contacts.weekDaysHours}</li>
          </ul>
        </div>

        <div className={styles.footerInnerItem}>
          <h6 className={styles.footerLabel}>Слідкувати</h6>

          <ul className={styles.footerSocials}>
            <li>
              <Button
                href="facebook.com"
                size="small"
                color="gray"
                icon="icon-facebook"
                className={styles.footerSocialsFacebook}
              />
            </li>
            <li>
              <Button
                type="link"
                href={contacts.instagram}
                size="small"
                color="gray"
                icon="icon-instagram"
                className={styles.footerSocialsInstagram}
              />
            </li>
          </ul>
        </div>

        <div className={styles.footerInnerItem}>
          <Logo className={styles.footerLogo} />
          <p className={styles.footerCopyright}>
            Всі права захищені&nbsp;&copy;&nbsp;{new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
