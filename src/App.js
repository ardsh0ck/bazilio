import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/scss/main.scss'
import './App.css'
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

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route element={<Layout />} path="/">
            <Route index element={<Home />} />
            <Route element={<Pizza />} path="pizza" />
            <Route element={<Salads />} path="salads" />
            <Route element={<Drinks />} path="drinks" />
            <Route element={<Actions />} path="actions" />
            <Route element={<Delivery />} path="delivery" />
            <Route element={<Contacts />} path="contacts" />
            <Route element={<Checkout />} path="checkout" />
            <Route element={<NotFound />} path="*" />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
