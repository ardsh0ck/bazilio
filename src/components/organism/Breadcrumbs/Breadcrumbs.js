import { Link } from 'react-router-dom'
import styles from './Breadcrumbs.module.scss'
import { Icons } from '../Icons/Icons'

const Breadcrumbs = (props) => {
  const { title, middle } = props

  return (
    <div className={styles.breadcrumbs}>
      <div className="inner">
        <ol className={styles.breadcrumbsList}>
          <li className={styles.breadcrumbsItem}>
            <Link className={styles.breadcrumbsLink} to={'/'}>
              Bazilio
              <Icons name="icon-arrow" />
            </Link>
          </li>

          {middle && (
            <li className={styles.breadcrumbsItem}>
              <Link className={styles.breadcrumbsLink} to={middle.href}>
                {middle.text}
                <Icons name="icon-arrow" />
              </Link>
            </li>
          )}

          <li className={styles.breadcrumbsItem}>
            <p className={styles.breadcrumbsCurrent}>{title}</p>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Breadcrumbs
