import styles from './Pizza.module.scss'
import { Outlet } from 'react-router-dom'

const Pizza = () => {
  return (
    <div className={styles.pizza}>
      <Outlet />
    </div>
  )
}

export default Pizza
