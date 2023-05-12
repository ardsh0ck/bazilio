import { useLocation } from 'react-router-dom'
import Button from '../../../components/organism/Button/Button'
import styles from './ActionCard.module.scss'

const ActionCard = (props) => {
  const { thumb, title, period, description, slug } = props
  const location = useLocation()

  return (
    <div className={styles.action}>
      <img src={thumb} className={styles.actionPicture} alt="" />
      <div className={styles.actionBody}>
        <h3 className={styles.actionTitle}>{title}</h3>
        <time className={styles.actionPeriod}>{period}</time>
        <p
          className={styles.actionDescription}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Button
          href={location === '/actions' ? slug : '/actions/' + slug}
          color="orange"
          text="Детальніше"
        />
      </div>
    </div>
  )
}

export default ActionCard
