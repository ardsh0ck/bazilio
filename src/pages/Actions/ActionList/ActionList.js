import styles from './ActionList.module.scss'
import ActionCard from '../ActionCard/ActionCard'
import Breadcrumbs from '../../../components/organism/Breadcrumbs/Breadcrumbs'

const ActionList = ({ data }) => {
  return (
    <section className={styles.actions}>
      <Breadcrumbs title="Акції" />

      <div className="inner">
        <h1 className="heading mb-6 lg:mb-8">Акції</h1>

        <ul className={styles.actionsList}>
          {data.map((action) => {
            return (
              <li>
                <ActionCard {...action} />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default ActionList
