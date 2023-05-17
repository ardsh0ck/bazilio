import { Outlet } from 'react-router-dom'
import { ShoppingCartProvider } from '../../organism/ShoppingCart/ShoppingCartContext'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './Layout.module.scss'
import clsx from 'clsx'
import ScrollToTop from '../../organism/ScrollToTop/ScrollToTop'

const Layout = ({ navigation }) => {
  return (
    <div className={clsx(styles.layout)}>
      <ShoppingCartProvider>
        <Header navigation={navigation} />

        <main className={styles.layoutContent}>
          <Outlet />
        </main>
      </ShoppingCartProvider>

      <Footer navigation={navigation} />

      <ScrollToTop />
    </div>
  )
}

export default Layout
