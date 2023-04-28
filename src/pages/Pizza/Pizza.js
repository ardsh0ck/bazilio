import styles from './Pizza.module.scss'
import pizza from '../../mocks/pizza'
import ProductList from '../../components/organism/ProductList/ProductList'

const Pizza = () => {
  return (
    <div className={styles.pizza}>
      <div className="inner">
        <div>
          <h1 className="heading">Піца</h1>
        </div>
      </div>

      <ProductList data={pizza} />
    </div>
  )
}

export default Pizza
