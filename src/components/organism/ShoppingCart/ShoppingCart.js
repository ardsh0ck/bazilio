import { Link } from 'react-router-dom'
import styles from './ShoppingCart.module.scss'
import { Icons } from '../Icons/Icons'

const ShoppingCart = () => {
  return (
    <div className={styles.cart}>
      <Link to="/checkout" className={styles.cartButton}>
        <span className={styles.cartButtonTitle}>Кошик</span>
        <Icons name="icon-cart" className={styles.cartButtonIcon} />
        <span className={styles.cartButtonCounter}>3</span>
      </Link>
    </div>
  )
}

export default ShoppingCart
