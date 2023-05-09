import styles from './Benefits.module.scss'
import benefitsImage from '../../../assets/images/design/benefits-image.png'
import clsx from 'clsx'
import { Icons } from '../../../components/organism/Icons/Icons'

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <div className="inner">
        <h5 className={styles.benefitsHeading}>
          БAZILIO — Це справжня піца з дров'яної печі
        </h5>

        <ul className={styles.benefitsList}>
          <li className={styles.benefitsItem}>
            <Icons name="icon-benefits-1" className={styles.benefitsItemIcon} />
            <div>
              <h6 className={styles.benefitsItemHeading}>
                Унікальний рецепт тіста
              </h6>
              <p className={styles.benefitsItemDescription}>
                Вершкова основа, моцарелла, горгондзола, груша, копчене куряче
                філе, соус бальзамік
              </p>
            </div>
          </li>
          <li className={styles.benefitsItem}>
            <Icons name="icon-benefits-2" className={styles.benefitsItemIcon} />
            <div>
              <h6 className={styles.benefitsItemHeading}>
                Найсвіжіші продукти
              </h6>
              <p className={styles.benefitsItemDescription}>
                Вершкова основа, моцарелла, горгондзола, груша, копчене куряче
                філе, соус бальзамік
              </p>
            </div>
          </li>
          <li className={styles.benefitsItem}>
            <Icons name="icon-benefits-3" className={styles.benefitsItemIcon} />
            <div>
              <h6 className={styles.benefitsItemHeading}>
                Випікаємо на дровах
              </h6>
              <p className={styles.benefitsItemDescription}>
                Вершкова основа, моцарелла, горгондзола, груша, копчене куряче
                філе, соус бальзамік
              </p>
            </div>
          </li>
          <li className={clsx(styles.benefitsItem, styles.benefitsItemPicture)}>
            <img src={benefitsImage} alt="" />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Benefits
