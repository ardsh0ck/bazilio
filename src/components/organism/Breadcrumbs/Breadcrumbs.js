import { Link } from 'react-router-dom'
import styles from './Breadcrumbs.module.scss'
import { Icons } from '../Icons/Icons'

const Breadcrumbs = (props) => {
  const { title } = props

  return (
    <div className={styles.breadcrumbs}>
      <div className="inner">
        <ul className={styles.breadcrumbsList}>
          <li className={styles.breadcrumbsItem}>
            <Link className={styles.breadcrumbsLink} to={'/'}>
              Bazilio
              <Icons name="icon-arrow" />
            </Link>
          </li>

          <li className={styles.breadcrumbsItem}>
            <Link className={styles.breadcrumbsLink} to={'/'}>
              Middle Page
              <Icons name="icon-arrow" />
            </Link>
          </li>

          <li className={styles.breadcrumbsItem}>
            <p className={styles.breadcrumbsCurrent}>{title}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Breadcrumbs
