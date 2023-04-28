import { NavLink } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import clsx from 'clsx'
import styles from './Navigation.module.scss'
import { ReactComponent as Logo } from '../../../assets/images/svg/logo.svg'

const Navigation = () => {
  const links = [
    {
      url: '/',
      img: <Logo />,
      text: 'Домашня сторінка',
      id: uuidv4(),
    },
    {
      url: 'pizza',
      text: 'Піца',
      id: uuidv4(),
    },
    {
      url: 'salads',
      text: 'Салати',
      id: uuidv4(),
    },
    {
      url: 'drinks',
      text: 'Напої',
      id: uuidv4(),
    },
    {
      url: 'actions',
      text: 'Акції',
      id: uuidv4(),
    },
    {
      url: 'contacts',
      text: 'Контакти',
      id: uuidv4(),
    },
    {
      url: 'delivery',
      text: 'Доставка',
      id: uuidv4(),
    },
  ]

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        {links.map((link) => {
          return (
            <li className={styles.navigationItem} key={link.id}>
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
