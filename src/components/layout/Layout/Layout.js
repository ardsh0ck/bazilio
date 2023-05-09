import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './Layout.module.scss'
import clsx from 'clsx'
import ScrollToTop from '../../organism/ScrollToTop/ScrollToTop'

const Layout = ({ navigation }) => {
  return (
    <div className={clsx(styles.layout)}>
      <Header navigation={navigation} />

      <main className={styles.layoutContent}>
        <Outlet />
      </main>

      <Footer navigation={navigation} />

      <ScrollToTop />
    </div>
  )
}

export default Layout
