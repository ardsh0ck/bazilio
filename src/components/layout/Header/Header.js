import { Link } from 'react-router-dom'
import TopLine from '../TopLine/TopLine'
import styles from './Header.module.scss'
import { ReactComponent as Logo } from '../../../assets/images/svg/logo.svg'
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
