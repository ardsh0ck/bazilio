import Breadcrumbs from '../../components/organism/Breadcrumbs/Breadcrumbs'
import FormControl from '../../components/organism/FormControl/FormControl'
import Button from '../../components/organism/Button/Button'
import CheckoutProduct from './CheckoutProduct/CheckoutProduct'
import styles from './Checkout.module.scss'
import clsx from 'clsx'
import pizza from '../../mocks/pizza'

const Checkout = () => {
  const sum = pizza.products.reduce((a, b) => (a = a + Number(b.price)), 0)

  return (
    <>
      <Breadcrumbs />
      <div className="inner">
        <h1 className={clsx(styles.checkoutHeading, 'heading')}>
          Замовлення №2123
        </h1>
      </div>

      <div className={styles.checkout}>
        <div className={clsx(styles.checkoutBlock, styles.checkoutProducts)}>
          <ul className={styles.checkoutProductsList}>
            {pizza.products.map((item) => {
              return (
                <li className={styles.checkoutProductsItem} key={item.id}>
                  <CheckoutProduct {...item} />
                </li>
              )
            })}
          </ul>
        </div>

        <form className={styles.checkoutForm}>
          <div className={styles.checkoutBlock}>
            <fieldset className={styles.checkoutFormFieldset}>
              <legend className={styles.checkoutFormLegend}>
                Контактна інформація
              </legend>

              <div className="flex flex-col md:flex-row gap-2 md:gap-3">
                <FormControl
                  type="text"
                  className="flex-1"
                  label="Введіть імʼя"
                  required
                />
                <FormControl
                  type="tel"
                  className="flex-1"
                  label="Номер телефону"
                  required
                />
                <FormControl type="email" className="flex-1" label="E-mail" />
              </div>
            </fieldset>

            {/* Delivery information */}
            <fieldset className={styles.checkoutFormFieldset}>
              <legend className={styles.checkoutFormLegend}>
                Інформація про доставку
              </legend>

              <FormControl
                type="toggle"
                toggle={[
                  {
                    id: 'delivery',
                    name: 'delivery',
                    label: 'Доставка',
                    onChange: console.log('checked'),
                  },
                  {
                    id: 'takeaway',
                    name: 'delivery',
                    label: 'Самовивіз',
                    onChange: console.log('checked'),
                  },
                ]}
                className="mb-2 md:mb-3"
              />

              <FormControl
                type="text"
                label="Вкажіть адресу доставки"
                className="mb-2 md:mb-3"
                required
              />
              <FormControl
                type="textarea"
                label="Коментар до замовлення"
                rows="10"
              />
            </fieldset>

            <fieldset className={styles.checkoutFormFieldset}>
              <legend className={styles.checkoutFormLegend}>Оплата</legend>

              <FormControl
                type="toggle"
                toggle={[
                  {
                    id: 'card',
                    name: 'payment',
                    label: 'Картою',
                    onChange: console.log('checked'),
                  },
                  {
                    id: 'cash',
                    name: 'payment',
                    label: 'Готівкою',
                    onChange: console.log('checked'),
                  },
                ]}
                className="mb-2 md:mb-3"
              />
            </fieldset>

            <fieldset className={styles.checkoutFormFieldset}>
              <legend className={styles.checkoutFormLegend}>Дата та час</legend>

              <div className="flex gap-3">
                <FormControl
                  type="select"
                  select={['Сьогодні', 'Завтра', 'Післязавтра']}
                />
                <FormControl
                  type="select"
                  select={[
                    'Якомога швидче',
                    '11:00',
                    '12:00',
                    '13:00',
                    '14:00',
                    '15:00',
                    '16:00',
                    '17:00',
                    '18:00',
                    '19:00',
                    '20:00',
                    '21:00',
                  ]}
                />
              </div>
            </fieldset>
          </div>

          <div
            className={clsx(styles.checkoutBlock, styles.checkoutFormFooter)}
          >
            <h4 className={styles.checkoutSum}>До сплати: {sum} &#8372;</h4>
            <Button type="submit" color="orange" text="Замовити" />
          </div>
        </form>
      </div>
    </>
  )
}

export default Checkout
