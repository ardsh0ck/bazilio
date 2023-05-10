import styles from './Icons.module.scss'
import { ReactComponent as Cart } from '../../../assets/images/svg/icon-cart.svg'
import { ReactComponent as Instagram } from '../../../assets/images/svg/icon-instagram.svg'
import { ReactComponent as Facebook } from '../../../assets/images/svg/icon-facebook.svg'
import { ReactComponent as Pepper } from '../../../assets/images/svg/icon-pepper.svg'
import { ReactComponent as Arrow } from '../../../assets/images/svg/icon-arrow.svg'
import { ReactComponent as ArrowRight } from '../../../assets/images/svg/icon-arrow-right.svg'
import { ReactComponent as Menu } from '../../../assets/images/svg/icon-menu.svg'
import { ReactComponent as Plus } from '../../../assets/images/svg/icon-plus.svg'
import { ReactComponent as Minus } from '../../../assets/images/svg/icon-minus.svg'
import { ReactComponent as Trash } from '../../../assets/images/svg/icon-trash.svg'
import { ReactComponent as BenefitsOne } from '../../../assets/images/svg/icon-benefits-1.svg'
import { ReactComponent as BenefitsTwo } from '../../../assets/images/svg/icon-benefits-2.svg'
import { ReactComponent as BenefitsThree } from '../../../assets/images/svg/icon-benefits-3.svg'
import { ReactComponent as Location } from '../../../assets/images/svg/icon-location.svg'
import { ReactComponent as Close } from '../../../assets/images/svg/icon-close.svg'
import { ReactComponent as CheckRounded } from '../../../assets/images/svg/icon-check-rounded.svg'
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
      case 'icon-arrow-right':
        return <ArrowRight />
      case 'icon-menu':
        return <Menu />
      case 'icon-plus':
        return <Plus />
      case 'icon-minus':
        return <Minus />
      case 'icon-trash':
        return <Trash />
      case 'icon-benefits-1':
        return <BenefitsOne />
      case 'icon-benefits-2':
        return <BenefitsTwo />
      case 'icon-benefits-3':
        return <BenefitsThree />
      case 'icon-location':
        return <Location />
      case 'icon-close':
        return <Close />
      case 'icon-check-rounded':
        return <CheckRounded />
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
