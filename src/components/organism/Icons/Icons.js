import styles from './Icons.module.scss'
import { ReactComponent as Cart } from '../../../assets/images/svg/icon-cart.svg'
import { ReactComponent as Instagram } from '../../../assets/images/svg/icon-instagram.svg'
import { ReactComponent as Facebook } from '../../../assets/images/svg/icon-facebook.svg'
import { ReactComponent as Pepper } from '../../../assets/images/svg/icon-pepper.svg'
import { ReactComponent as Arrow } from '../../../assets/images/svg/icon-arrow.svg'
import { ReactComponent as Menu } from '../../../assets/images/svg/icon-menu.svg'
import clsx from 'clsx'

export const Icons = ({ name, className }) => {
  const renderIcon = (name) => {
    switch (name) {
      case 'icon-cart':
        return <Cart />
      case 'icon-instagram':
        return <Instagram />
      case 'icon-facebook':
        return <Facebook />
      case 'icon-pepper':
        return <Pepper />
      case 'icon-arrow':
        return <Arrow />
      case 'icon-menu':
        return <Menu />
      default:
        return <></>
    }
  }

  return (
    <div className={clsx(styles.icon, className)}>
      {name && renderIcon(name)}
    </div>
  )
}
