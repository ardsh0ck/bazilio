import { useState } from 'react'
import { Icons } from '../../../components/organism/Icons/Icons'
import styles from './CheckoutProduct.module.scss'
import clsx from 'clsx'

const CheckoutProduct = (props) => {
  const { image, title, weight, contents, price } = props

  const [toggleInfo, setToggleInfo] = useState(false)
  const [quantity, setQuantity] = useState(1)

  return (
    <div className={styles.product}>
      <img src={image.small} className={styles.productPicture} alt="" />

      <div className={styles.productInfo}>
        <div className={styles.productHeader}>
          {title}
          <button
            type="button"
            className={clsx(styles.productToggle, {
              [styles.productToggleOpened]: toggleInfo,
            })}
            onClick={() => setToggleInfo(!toggleInfo)}
            aria-label="Показати опис"
          >
            <Icons name="icon-arrow" />
          </button>
        </div>

        <div
          className={clsx(styles.productShortInfo, {
            [styles.productShortInfoOpened]: toggleInfo,
          })}
        >
          <p className={styles.productWeight}>{weight} г</p>
          <p className={styles.productContents}>{contents}</p>
        </div>

        <div className={styles.productFooter}>
          {/* price */}
          <p className={styles.productPrice}>{price} &#8372;</p>

          {/* couner */}
          <div className={styles.productCounter}>
            <button
              type="button"
              className={styles.productFooterButton}
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity === 1}
            >
              <Icons name="icon-minus" />
            </button>
            <p className={styles.productCounterQuantity}>{quantity} шт.</p>
            <button
              type="button"
              className={styles.productFooterButton}
              onClick={() => setQuantity(quantity + 1)}
            >
              <Icons name="icon-plus" />
            </button>
          </div>

          {/* delete button */}
          <button
            type="button"
            className={clsx(styles.productFooterButton, 'ml-auto md:ml-0')}
            onClick={() => setQuantity(quantity + 1)}
          >
            <Icons name="icon-trash" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutProduct
