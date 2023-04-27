import styles from './TopLine.module.scss'
import clsx from 'clsx'

const TopLine = () => {
  return (
    <div className={styles.topline}>
      <div className={clsx(styles.toplineInner, 'inner')}>TopLine</div>
    </div>
  )
}

export default TopLine
