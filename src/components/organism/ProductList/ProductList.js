import clsx from 'clsx'
import styles from './ProductList.module.scss'
import ProductCard from '../ProductCard/ProductCard'

const ProductList = ({ data, type }) => {
  return (
    <div className={styles.catalog}>
      <ul
        className={clsx(styles.catalogList, {
          [styles.catalogListScroll]: type === 'scroll',
        })}
      >
        {data.map((product) => {
          return (
            <li className={styles.catalogItem} key={product.id}>
              <ProductCard {...product} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ProductList
