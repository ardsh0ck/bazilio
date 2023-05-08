import styles from './Home.module.scss'
import Slider from '../../components/organism/Slider/Slider'
import ProductList from '../../components/organism/ProductList/ProductList'
import pizza from '../../mocks/pizza'
import slider from '../../mocks/slider'
import { Link } from 'react-router-dom'
import { Icons } from '../../components/organism/Icons/Icons'
import Categories from './Categories/Categories'
import Benefits from './Benefits/Benefits'

const Home = () => {
  return (
    <div className={styles.home}>
      <Slider data={slider} />

      <Categories />

      <section className="mb-14">
        <div className="inner flex justify-between items-center mb-6 lg:mb-8">
          <h2 className="heading">Піцa</h2>
          <Link
            className="flex items-center gap-2 text-lg text-main-accent"
            to="pizza"
          >
            Більше
            <Icons name="icon-arrow" />
          </Link>
        </div>

        <ProductList data={pizza.products.slice(0, 4)} type="scroll" />
      </section>

      <Benefits />
    </div>
  )
}

export default Home
