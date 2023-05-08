import styles from './Benefits.module.scss'
import benefitsImage from '../../../assets/images/design/benefits-image.png'
import clsx from 'clsx'
import { Icons } from '../../../components/organism/Icons/Icons'

const Benefits = () => {
  return (
    <section className={clsx(styles.benefits, 'inner')}>
      <ul className={styles.benefitsList}>
        <li className={styles.benefitsItem}>
          <Icons name="icon-benefits-1" className={styles.benefitsItemIcon} />
          <h8 className={styles.benefitsItemHeading}>
            Унікальний рецепт тіста
          </h8>
          <p className={styles.benefitsItemDescription}>
            Вершкова основа, моцарелла, горгондзола, груша, копчене куряче філе,
            соус бальзамік
          </p>
        </li>
        <li className={styles.benefitsItem}>
          <Icons name="icon-benefits-2" className={styles.benefitsItemIcon} />
          <h8 className={styles.benefitsItemHeading}>Найсвіжіші продукти</h8>
          <p className={styles.benefitsItemDescription}>
            Вершкова основа, моцарелла, горгондзола, груша, копчене куряче філе,
            соус бальзамік
          </p>
        </li>
        <li className={styles.benefitsItem}>
          <Icons name="icon-benefits-3" className={styles.benefitsItemIcon} />
          <h8 className={styles.benefitsItemHeading}>Випікаємо на дровах</h8>
          <p className={styles.benefitsItemDescription}>
            Вершкова основа, моцарелла, горгондзола, груша, копчене куряче філе,
            соус бальзамік
          </p>
        </li>
        <li className={clsx(styles.benefitsItem, styles.benefitsItemPicture)}>
          <img src={benefitsImage} alt="" />
        </li>
      </ul>
    </section>
  )
}

export default Benefits
