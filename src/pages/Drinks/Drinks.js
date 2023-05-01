import { Outlet } from 'react-router-dom'
import styles from './Drinks.module.scss'

const Drinks = () => {
  return (
    <div className={styles.drinks}>
      <Outlet />
    </div>
  )
}

export default Drinks
