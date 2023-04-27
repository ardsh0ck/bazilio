import TopLine from '../TopLine/TopLine'
import styles from './Header.module.scss'
import clsx from 'clsx'
import Navigation from '../../organism/Navigation/Navigation'

const Header = () => {
  return (
    <header className={styles.header}>
      <TopLine />

      <div className={clsx(styles.headerInner, 'inner')}>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
