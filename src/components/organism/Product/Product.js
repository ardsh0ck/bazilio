import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import clsx from 'clsx'
import styles from './Product.module.scss'
import useDocumentTitle from '../../../utils/setDocumentTitle'
import pizza from '../../../mocks/pizza'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'

const Product = () => {
  const params = useParams()
  const navigate = useNavigate()
  const product = pizza.products.find((product) => product.slug === params.slug)

  useEffect(() => {
    if (!product) {
      navigate('..', { relative: 'path' })
    }
  }, [product, navigate])

  useDocumentTitle(product.title)

  return (
    <>
      <Breadcrumbs {...product} />

      <article className={clsx(styles.product, 'inner')}>
        <img
          src={product?.image?.big}
          alt={product.title}
          className={styles.productPicture}
        />

        <div className={styles.productInfo}>
          <header>
            <p>480 г</p>
            <h1 className={clsx('heading')}>{product.title}</h1>
          </header>
        </div>
      </article>
    </>
  )
}

export default Product
