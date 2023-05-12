import Breadcrumbs from '../../../components/organism/Breadcrumbs/Breadcrumbs'
import styles from './Action.module.scss'

const Action = () => {
  return (
    <>
      <Breadcrumbs middle={{ href: '/actions', text: 'Акції' }} title="aaa" />

      <div className={styles.action}>
        <h1 className="heading">asasas</h1>
      </div>
    </>
  )
}

export default Action
