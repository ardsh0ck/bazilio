import clsx from 'clsx'
import Button from '../Button/Button'
import { Icons } from '../Icons/Icons'
import styles from './ProductCard.module.scss'

const ProductCard = ({
  image,
  title,
  weight,
  contents,
  price,
  label,
  labelType,
  hot,
}) => {
  return (
    <div className={styles.productCard}>
      <img src={image} className={styles.productCardImage} alt="" />

      <h4 className={styles.productCardTitle}>{title}</h4>

      <p className={styles.productCardWeight}>{weight} г</p>

      <p className={styles.productCardContents}>{contents}</p>

      <div className={styles.productCardFooter}>
        <p className={styles.productCardPrice}>
          <span>{price}</span>&#8372;
        </p>
        <Button color="orange" text="В кошик" icon="icon-cart" />
      </div>

      {hot && <Icons name="icon-pepper" className={styles.productCardPepper} />}

      {label && (
        <p
          className={clsx(styles.productCardLabel, {
            [styles.productCardLabelNew]: labelType === 'new',
            [styles.productCardLabelWeek]: labelType === 'week',
          })}
        >
          {label}
        </p>
      )}
    </div>
  )
}

export default ProductCard
