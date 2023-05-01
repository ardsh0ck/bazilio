import { Icons } from '../Icons/Icons'
import styles from './SideMenu.module.scss'

const SideMenu = () => {
  return (
    <div className={styles.sideMenu}>
      <button className={styles.sideMenuButton} type="button">
        <Icons name="icon-menu" />
      </button>
    </div>
  )
}

export default SideMenu
