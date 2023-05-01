import { Link } from 'react-router-dom'
import clsx from 'clsx'
import styles from './Pagination.module.scss'

const Pagination = () => {
  return (
    <div className={clsx(styles.pagination, 'inner')}>
      <ul className={styles.paginationList}>
        <li>
          <Link>
            <p>&larr;</p>
          </Link>
        </li>
        <li>
          <Link>1</Link>
        </li>
        <li>
          <Link>2</Link>
        </li>
        <li>
          <Link>3</Link>
        </li>
        <li>
          <Link>
            <p>&rarr;</p>{' '}
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
