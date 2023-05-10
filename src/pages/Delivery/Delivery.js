import clsx from 'clsx'
import styles from './Delivery.module.scss'
import Breadcrumbs from '../../components/organism/Breadcrumbs/Breadcrumbs'

const Delivery = () => {
  return (
    <>
      <Breadcrumbs />

      <div className={clsx(styles.delivery, 'inner')}>
        <h1 className="heading mb-4 md:mb-6 lg:mb-8">Доставка</h1>

        <div className={styles.deliveryDescription}>
          <p>
            Доставка здійснюється в м.Прилуки та с.Манжосівка з 10:00 до 20:00
          </p>
          <p>
            Доставки для замовлень до 300 грн - 40 грн, більше 300 грн -
            безкоштовно.
          </p>
          <p>
            Також ви можете забрати замовлення самостійно в ресторані «Bazilio»
          </p>
        </div>

        <h2 className="heading mb-5 md:mb-6 lg:mb-8">Мапа зон доставки</h2>

        <div className={styles.deliveryMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2532.785223896005!2d32.39050827702693!3d50.59394517702072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d593fe59d7376b%3A0xb52664d3bfc50f23!2z0JHQsNC30ZbQu9GW0L4g0L_RltGG0LXRgNGW0Y8!5e0!3m2!1suk!2sua!4v1683658612176!5m2!1suk!2sua"
            width="100%"
            height="500"
            allowfullscreen=""
            loading="lazy"
            title="Піцерія Базіліо"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default Delivery
