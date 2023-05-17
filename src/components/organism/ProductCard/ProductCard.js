import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../ShoppingCart/ShoppingCartContext'
import Button from '../Button/Button'
import { Icons } from '../Icons/Icons'
import styles from './ProductCard.module.scss'
import PromoLabel from '../PromoLabel/PromoLabel'

const ProductCard = (props) => {
  const { id, slug, image, title, weight, contents, hot, label, price } = props

  const location = useLocation()

  const { addItemToCart } = useContext(ShoppingCartContext)

  const handleBuyClick = (itemId) => {
    addItemToCart(itemId)
  }

  return (
    <div className={styles.productCard}>
      <Link to={location === '/pizza' ? slug : '/pizza/' + slug}>
        <img src={image?.small} className={styles.productCardImage} alt="" />

        <h4 className={styles.productCardTitle}>{title}</h4>

        <p className={styles.productCardWeight}>{weight} г</p>

        <p className={styles.productCardContents}>{contents}</p>

        {hot && (
          <Icons name="icon-pepper" className={styles.productCardPepper} />
        )}

        {label && <PromoLabel {...label} className={styles.productCardLabel} />}
      </Link>

      <div className={styles.productCardFooter}>
        <p className={styles.productCardPrice}>
          <span>{price}</span>&#8372;
        </p>
        <Button
          color="orange"
          text="В кошик"
          icon="icon-cart"
          onClickHendler={() => handleBuyClick(id)}
        />
      </div>
    </div>
  )
}

export default ProductCard
