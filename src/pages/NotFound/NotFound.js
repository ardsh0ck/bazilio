import clsx from 'clsx'
import styles from './NotFound.module.scss'
import notFoundFour from '../../assets/images/design/not-found-4.png'
import notFoundPizza from '../../assets/images/design/not-found-pizza.png'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className="inner">
        <div className={styles.notFoundGrafic}>
          <img
            className={styles.notFoundGraficImage}
            src={notFoundFour}
            alt=""
          />
          <img
            className={clsx(
              styles.notFoundGraficImage,
              styles.notFoundGraficPizza
            )}
            src={notFoundPizza}
            alt=""
          />
          <img
            src={notFoundFour}
            className={styles.notFoundGraficImage}
            alt=""
          />
        </div>

        <h1 className={clsx(styles.notFoundHeading, 'heading')}>Уууупс...</h1>

        <p className={styles.notFoundCaption}>
          Як би ми не намагалися її знайти, ми справді не знаємо де ця
          сторінка...
        </p>

        <Link to="/">До гловної</Link>
      </div>
    </div>
  )
}

export default NotFound
