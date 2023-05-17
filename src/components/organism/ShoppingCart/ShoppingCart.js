import { Link } from 'react-router-dom'
import { ShoppingCartContext } from './ShoppingCartContext'
import styles from './ShoppingCart.module.scss'
import { Icons } from '../Icons/Icons'
import { useContext } from 'react'

const ShoppingCart = () => {
  const { cartItems } = useContext(ShoppingCartContext)
  const items = cartItems.length

  return (
    <div className={styles.cart}>
      <Link to="/checkout" className={styles.cartButton}>
        <span className={styles.cartButtonTitle}>Кошик</span>
        <Icons name="icon-cart" className={styles.cartButtonIcon} />
        {items !== 0 && (
          <span className={styles.cartButtonCounter}>{items}</span>
        )}
      </Link>
    </div>
  )
}

export default ShoppingCart
