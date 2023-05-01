import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import clsx from 'clsx'
import styles from './Product.module.scss'
import useDocumentTitle from '../../../utils/setDocumentTitle'
import pizza from '../../../mocks/pizza'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import PromoLabel from '../PromoLabel/PromoLabel'
import { Icons } from '../Icons/Icons'
import FormControl from '../FormControl/FormControl'

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

  const [showIngredients, setShowIngredients] = useState(false)

  return (
    <>
      <Breadcrumbs {...product} />

      <article className={clsx(styles.product, 'inner')}>
        <div className={styles.productPicture}>
          <img src={product?.image?.big} alt={product.title} />
          <PromoLabel
            {...product?.label}
            className={styles.productPictureLabel}
          />
        </div>

        <div className={styles.productInfo}>
          <header className={styles.productHeader}>
            <p className={styles.productWeight}>{product.weight} г</p>
            <h1 className={clsx('heading')}>{product.title}</h1>
          </header>

          <div className={styles.productContents}>
            <h2 className={styles.productContentsLabel}>Склад</h2>
            <p className={styles.productContentsText}>{product.contents}</p>
          </div>

          <div className={styles.productIngredients}>
            <button
              type="button"
              className={clsx(styles.productIngredientsToggle, {
                [styles.productIngredientsToggleOpened]: showIngredients,
              })}
              onClick={() => setShowIngredients(!showIngredients)}
            >
              Додати інгредієнти
              <Icons name={!showIngredients ? 'icon-plus' : 'icon-minus'} />
            </button>

            {showIngredients && (
              <ul className={styles.productIngredientsList}>
                <li className={styles.productIngredientsItem}>
                  <FormControl
                    type="checkbox"
                    label={
                      <div className={styles.productIngredientsLabel}>
                        <p>Сир (40г)</p> <p>+20 грн</p>
                      </div>
                    }
                  />
                </li>
                <li className={styles.productIngredientsItem}>
                  <FormControl
                    type="checkbox"
                    label={
                      <div className={styles.productIngredientsLabel}>
                        <p>Пепероні (50г)</p> <p>+20 грн</p>
                      </div>
                    }
                  />
                </li>
                <li className={styles.productIngredientsItem}>
                  <FormControl
                    type="checkbox"
                    label={
                      <div className={styles.productIngredientsLabel}>
                        <p>Шинка (40г)</p> <p>+20 грн</p>
                      </div>
                    }
                  />
                </li>
                <li className={styles.productIngredientsItem}>
                  <FormControl
                    type="checkbox"
                    label={
                      <div className={styles.productIngredientsLabel}>
                        <p>Сир (40г)</p> <p>+20 грн</p>
                      </div>
                    }
                  />
                </li>
                <li className={styles.productIngredientsItem}>
                  <FormControl
                    type="checkbox"
                    label={
                      <div className={styles.productIngredientsLabel}>
                        <p>Пепероні (50г)</p> <p>+20 грн</p>
                      </div>
                    }
                  />
                </li>
                <li className={styles.productIngredientsItem}>
                  <FormControl
                    type="checkbox"
                    label={
                      <div className={styles.productIngredientsLabel}>
                        <p>Шинка (40г)</p> <p>+20 грн</p>
                      </div>
                    }
                  />
                </li>
              </ul>
            )}
          </div>
        </div>
      </article>
    </>
  )
}

export default Product
