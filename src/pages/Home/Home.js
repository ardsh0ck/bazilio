import clsx from 'clsx'
import styles from './Home.module.scss'
import Slider from '../../components/organism/Slider/Slider'

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={clsx('inner')}>
        Home
        <Slider />
      </div>
    </div>
  )
}

export default Home
