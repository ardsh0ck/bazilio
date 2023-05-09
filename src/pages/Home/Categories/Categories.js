import { Link } from 'react-router-dom'
import styles from './Categories.module.scss'
import { Icons } from '../../../components/organism/Icons/Icons'
import catPizza from '../../../assets/images/design/cat-pizza.png'
import catSalads from '../../../assets/images/design/cat-salads.png'
import catDrinks from '../../../assets/images/design/cat-drinks.png'

const Categories = () => {
  return (
    <section className="mb-2 md:mb-6 lg:mb-8">
      <ul className={styles.categories}>
        <li className={styles.categoriesItem}>
          <Link to="/pizza" className={styles.categoriesCard}>
            <h5 className={styles.categoriesCardTitle}>Піца</h5>
            <p className={styles.categoriesCardPrice}>
              від 70<small>&#8372;</small>
            </p>
            <span className={styles.categoriesCardArrow}>
              <Icons name="icon-arrow-right" />
            </span>
            <img
              src={catPizza}
              className={styles.categoriesCardPicture}
              alt=""
            />
          </Link>
        </li>
        <li className={styles.categoriesItem}>
          <Link to="/salads" className={styles.categoriesCard}>
            <h5 className={styles.categoriesCardTitle}>Салати</h5>
            <p className={styles.categoriesCardPrice}>
              від 84<small>&#8372;</small>
            </p>
            <span className={styles.categoriesCardArrow}>
              <Icons name="icon-arrow-right" />
            </span>
            <img
              src={catSalads}
              className={styles.categoriesCardPicture}
              alt=""
            />
          </Link>
        </li>
        <li className={styles.categoriesItem}>
          <Link to="/drinks" className={styles.categoriesCard}>
            <h5 className={styles.categoriesCardTitle}>Напої</h5>
            <p className={styles.categoriesCardPrice}>
              від 25<small>&#8372;</small>
            </p>
            <span className={styles.categoriesCardArrow}>
              <Icons name="icon-arrow-right" />
            </span>
            <img
              src={catDrinks}
              className={styles.categoriesCardPicture}
              alt=""
            />
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Categories
