import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import ProductList from '../ProductList/ProductList'
import Pagination from '../Pagination/Pagination'
import styles from './Catalog.module.scss'

const Catalog = (props) => {
  const { data } = props

  return (
    <div className={styles.catalog}>
      <Breadcrumbs />

      <div className="inner flex justify-between items-center mb-6 lg:mb-8">
        <h2 className="heading">{data.category.title}</h2>
      </div>

      <ProductList data={data.products} />

      <Pagination />
    </div>
  )
}

export default Catalog
