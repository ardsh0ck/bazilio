import { Link, useLocation } from 'react-router-dom'
import Button from '../Button/Button'
import { Icons } from '../Icons/Icons'
import styles from './ProductCard.module.scss'
import PromoLabel from '../PromoLabel/PromoLabel'

const ProductCard = (props) => {
  const { slug, image, title, weight, contents, price, label, hot } = props
  const location = useLocation()

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
        <Button color="orange" text="В кошик" icon="icon-cart" />
      </div>
    </div>
  )
}

export default ProductCard
