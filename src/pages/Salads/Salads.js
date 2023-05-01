import { Outlet } from 'react-router-dom'
import styles from './Salads.module.scss'

const Salads = () => {
  return (
    <div className={styles.salads}>
      <Outlet />
    </div>
  )
}

export default Salads
