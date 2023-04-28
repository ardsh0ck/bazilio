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
              <ProductCard
                image={product.image}
                title={product.title}
                weight={product.weight}
                contents={product.contents}
                price={product.price}
                hot={product.hot}
                labelType={product?.label?.type}
                label={product?.label?.text}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ProductList
