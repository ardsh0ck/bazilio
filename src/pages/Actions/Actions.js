import clsx from 'clsx'
import styles from './Actions.module.scss'
import Breadcrumbs from '../../components/organism/Breadcrumbs/Breadcrumbs'

const Actions = () => {
  return (
    <>
      <Breadcrumbs />

      <div className={clsx(styles.actions, 'inner')}>
        <h1 className="heading">Акції</h1>
      </div>
    </>
  )
}

export default Actions
