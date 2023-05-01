import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/scss/main.scss'
import './App.css'
import ScrollToTop from './utils/scrollToTop'
import Layout from './components/layout/Layout/Layout'
import Home from './pages/Home/Home'
import Pizza from './pages/Pizza/Pizza'
import Salads from './pages/Salads/Salads'
import Drinks from './pages/Drinks/Drinks'
import Contacts from './pages/Contacts/Contacts'
import Delivery from './pages/Delivery/Delivery'
import Actions from './pages/Actions/Actions'
import Checkout from './pages/Checkout/Checkout'
import NotFound from './pages/NotFound/NotFound'
import Product from './components/organism/Product/Product'
import Catalog from './components/organism/Catalog/Catalog'
import dishes from './mocks/pizza'

function App() {
  const titlePrefix = 'БAZILIO | '

  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />} path="/">
            <Route index element={<Home />} />
            <Route element={<Pizza />} path="pizza">
              <Route index element={<Catalog data={dishes} />} />
              <Route
                element={<Product />}
                path=":slug"
                title={`${titlePrefix}`}
              />
            </Route>
            <Route element={<Salads />} path="salads">
              <Route index element={<Catalog data={dishes} />} />
              <Route
                element={<Product />}
                path=":slug"
                title={`${titlePrefix}`}
              />
            </Route>
            <Route element={<Drinks />} path="drinks">
              <Route index element={<Catalog data={dishes} />} />
              <Route
                element={<Product />}
                path=":slug"
                title={`${titlePrefix}`}
              />
            </Route>
            <Route element={<Actions />} path="actions" />
            <Route element={<Delivery />} path="delivery" />
            <Route element={<Contacts />} path="contacts" />
            <Route element={<Checkout />} path="checkout" />
            <Route element={<NotFound />} path="*" />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
