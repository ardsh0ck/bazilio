import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './Layout.module.scss'
import clsx from 'clsx'

const Layout = () => {
  return (
    <div className={clsx(styles.layout)}>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout
