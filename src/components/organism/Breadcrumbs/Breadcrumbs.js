import { Link } from 'react-router-dom'
import styles from './Breadcrumbs.module.scss'

const Breadcrumbs = () => {
  return (
    <div className={styles.breadcrumbs}>
      <div className="inner">
        <ul className={styles.breadcrumbsList}>
          <li className={styles.breadcrumbsItem}>
            <Link className={styles.breadcrumbsLink} to={'/'}>
              Bazilio
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Breadcrumbs
