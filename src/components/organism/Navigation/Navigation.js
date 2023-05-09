import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import styles from './Navigation.module.scss'

const Navigation = ({ navigation, className }) => {
  return (
    <nav className={clsx(styles.navigation, className)}>
      <ul className={styles.navigationList}>
        {navigation.map((link) => {
          return (
            <li
              className={clsx(styles.navigationItem, {
                ['hidden lg:block']: link.bigScreen && !link.smallScreen,
                ['sm:!block md:!hidden']: link.smallScreen,
              })}
              key={link.id}
            >
              <NavLink
                to={link.url}
                title={link.title}
                className={({ isActive }) =>
                  clsx(styles.navigationLink, {
                    [styles.navigationLogo]: link.img,
                    [styles.navigationLinkActive]: isActive,
                  })
                }
              >
                {link.img && link.img}
                {!link.img && link.text}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
