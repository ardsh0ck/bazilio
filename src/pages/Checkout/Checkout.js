import { useState } from 'react'
import clsx from 'clsx'
import Breadcrumbs from '../../components/organism/Breadcrumbs/Breadcrumbs'
import FormControl from '../../components/organism/FormControl/FormControl'
import Button from '../../components/organism/Button/Button'
import CheckoutProduct from './CheckoutProduct/CheckoutProduct'
import ModalWindow from '../../components/organism/ModalWindow/ModalWindow'
import styles from './Checkout.module.scss'
import pizza from '../../mocks/pizza'
import { Icons } from '../../components/organism/Icons/Icons'

const Checkout = () => {
  const order = pizza.products.map((item) => item.id) // array of products ids
  const sum = pizza.products.reduce((a, b) => (a = a + Number(b.price)), 0)
  const initialFormData = {
    name: '',
    phone: '',
    email: '',
    address: '',
    delivery: 'delivery',
    message: '',
    payment: 'card',
    day: 'today',
    time: 'asap',
    products: order,
  }
  const [formData, setFormData] = useState(initialFormData)
  //const [submitDisabled, setSubmitDisabled] = useState(true)
  const [showModal, setIsShowModal] = useState(false)
  const handleInputChange = (event) => {
    const { name, value } = event.target
    if (event.target.tagName.toLowerCase() === 'select') {
      setFormData({ ...formData, [name]: value })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const formDataToSend = new FormData()
    formDataToSend.append('name', formData.name)
    formDataToSend.append('phone', formData.phone)
    formDataToSend.append('email', formData.email)
    formDataToSend.append('address', formData.address)
    formDataToSend.append('delivery', formData.delivery)
    formDataToSend.append('message', formData.message)
    formDataToSend.append('payment', formData.payment)
    formDataToSend.append('day', formData.day)
    formDataToSend.append('time', formData.time)
    try {
      console.log(
        formData, // form data scoped into object
        setIsShowModal(true)
      )
      alert('Пук... Срєньк... Подивись у консоль')
    } catch (error) {
      console.error(error)
    }
  }

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

        <form className={styles.checkoutForm} onSubmit={handleSubmit}>
          <div className={styles.checkoutBlock}>
            <fieldset className={styles.checkoutFormFieldset}>
              <legend className={styles.checkoutFormLegend}>
                Контактна інформація
              </legend>

              <div className="flex flex-col lg:flex-row gap-2 md:gap-3">
                <FormControl
                  type="text"
                  name="name"
                  value={formData.name}
                  onChangeHandle={handleInputChange}
                  className="flex-1"
                  label="Введіть імʼя"
                  required
                />
                <FormControl
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChangeHandle={handleInputChange}
                  className="flex-1"
                  label="Номер телефону"
                  required
                />
                <FormControl
                  type="email"
                  name="email"
                  value={formData.email}
                  onChangeHandle={handleInputChange}
                  className="flex-1"
                  label="E-mail"
                />
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
                    value: 'delivery',
                    checked: formData.delivery === 'delivery',
                    onChange: handleInputChange,
                    label: 'Доставка',
                  },
                  {
                    id: 'takeaway',
                    name: 'delivery',
                    value: 'takeaway',
                    checked: formData.delivery === 'takeaway',
                    onChange: handleInputChange,
                    label: 'Самовивіз',
                  },
                ]}
                className="mb-2 md:mb-3"
              />

              {formData.delivery === 'delivery' && (
                <FormControl
                  type="text"
                  name="address"
                  value={formData.address}
                  onChangeHandle={handleInputChange}
                  label="Вкажіть адресу доставки"
                  className="mb-2 md:mb-3"
                  required
                />
              )}

              {formData.delivery === 'takeaway' && (
                <div className={styles.checkoutFormTakeAway}>
                  <Icons name="icon-location" />
                  Адреса отримання — м.Прилуки, Київська 309, Ресторан «БAZILIO»
                </div>
              )}

              <FormControl
                type="textarea"
                name="message"
                value={formData.message}
                onChangeHandle={handleInputChange}
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
                    value: 'card',
                    checked: formData.payment === 'card',
                    onChange: handleInputChange,
                    label: 'Картою',
                  },
                  {
                    id: 'cash',
                    name: 'payment',
                    value: 'cash',
                    checked: formData.payment === 'cash',
                    label: 'Готівкою',
                    onChange: handleInputChange,
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
                  name="day"
                  onChangeHandle={handleInputChange}
                  select={[
                    {
                      label: 'Сьогодні',
                      value: 'today',
                    },
                    {
                      label: 'Завтра',
                      value: 'tomorrow',
                    },
                    {
                      label: 'Післязавтра',
                      value: 'day-after-tommorow',
                    },
                  ]}
                />
                <FormControl
                  type="select"
                  name="time"
                  onChangeHandle={handleInputChange}
                  select={[
                    {
                      label: 'Якомога швидче',
                      value: 'asap',
                    },
                    {
                      label: '11:00',
                      value: '11:00',
                    },
                    {
                      label: '12:00',
                      value: '12:00',
                    },
                    {
                      label: '13:00',
                      value: '13:00',
                    },
                    {
                      label: '14:00',
                      value: '14:00',
                    },
                    {
                      label: '15:00',
                      value: '15:00',
                    },
                    {
                      label: '16:00',
                      value: '16:00',
                    },
                    {
                      label: '17:00',
                      value: '17:00',
                    },
                    {
                      label: '18:00',
                      value: '18:00',
                    },
                    {
                      label: '19:00',
                      value: '19:00',
                    },
                    {
                      label: '20:00',
                      value: '20:00',
                    },
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

        {/* Success Modal */}
        <ModalWindow
          showModal={showModal}
          closeModal={() => setIsShowModal(!showModal)}
        >
          <div className={styles.checkoutSuccess}>
            <Icons
              name="icon-check-rounded"
              className={styles.checkoutSuccessIcon}
            />
            <h2 className={styles.checkoutSuccessHeading}>Замовлення №2123</h2>
            <p className={styles.checkoutSuccessText}>
              Дякуємо за ваше замовлення, ми зв'яжемося з вами найближчим часом
              для уточнення деталей
            </p>
            <Button
              color="orange"
              href="/"
              text="Повернутися до головної"
              className={styles.checkoutSuccessButton}
            />
          </div>
        </ModalWindow>
      </div>
    </>
  )
}

export default Checkout
