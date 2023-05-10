import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import styles from './Contacts.module.scss'
import Breadcrumbs from '../../components/organism/Breadcrumbs/Breadcrumbs'
import FormControl from '../../components/organism/FormControl/FormControl'
import Button from '../../components/organism/Button/Button'
import contacts from '../../data/contacts'

const Contacts = () => {
  const initialFormData = {
    name: '',
    phone: '',
    message: '',
  }
  const [formData, setFormData] = useState(initialFormData)
  const [submitDisabled, setSubmitDisabled] = useState(true)
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const formDataToSend = new FormData()
    formDataToSend.append('name', formData.name)
    formDataToSend.append('phone', formData.phone)
    formDataToSend.append('message', formData.message)
    try {
      console.log(formData)
      alert('Submitted')
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    if (
      formData.name !== '' &&
      formData.phone !== '' &&
      formData.message !== ''
    ) {
      setSubmitDisabled(false)
    } else {
      setSubmitDisabled(true)
    }
  }, [formData])

  return (
    <>
      <Breadcrumbs />
      <div className={clsx(styles.contacts, 'inner')}>
        <h1 className="heading mb-4 md:mb-6 lg:mb-8">Контакти</h1>

        <dl className={styles.contactsList}>
          <div className={styles.contactsListItem}>
            <dt className={styles.contactsListLabel}>Наша адреса</dt>
            <dd className={styles.contactsListValue}>{contacts.address}</dd>
          </div>
          <div className={styles.contactsListItem}>
            <dt className={styles.contactsListLabel}>Зателефонуйте</dt>
            <dd className={styles.contactsListValue}>
              <Link to={'tel:' + contacts.phone}>{contacts.phone}</Link>
            </dd>
          </div>
          <div className={styles.contactsListItem}>
            <dt className={styles.contactsListLabel}>Працюємо для вас</dt>
            <dd className={styles.contactsListValue}>
              <p>пн-чт {contacts.weekDaysHours}</p>
              <p>пт-нд {contacts.weekendHours}</p>
            </dd>
          </div>
        </dl>

        <form onSubmit={handleSubmit} className={styles.contactsForm}>
          <fieldset>
            <legend className="heading mb-5 md:mb-6 lg:mb-8">
              Зворотній зв’язок
            </legend>

            <div className="grid lg:grid-cols-2 gap-2 lg:gap-4 mb-2 lg:mb-4">
              <FormControl
                type="text"
                name="name"
                value={formData.name}
                onChangeHandle={handleInputChange}
                color="bg"
                label="Введіть им’я"
                required
                className={styles.contactsFormInput}
              />

              <FormControl
                type="text"
                name="phone"
                value={formData.phone}
                onChangeHandle={handleInputChange}
                color="bg"
                label="Номер телефону"
                required
                className={styles.contactsFormInput}
              />
            </div>

            <FormControl
              type="textarea"
              name="message"
              value={formData.message}
              onChangeHandle={handleInputChange}
              color="bg"
              label="Повідомлення тут..."
              rows="10"
              className="mb-2 lg:mb-4"
            />

            <Button
              type="submit"
              color="orange"
              text="Надіслати повідомлення"
              className={styles.contactsFormSubmit}
              icon="icon-arrow-right"
              disabled={submitDisabled}
            />
          </fieldset>
        </form>

        <div className={styles.contactsMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2532.785223896005!2d32.39050827702693!3d50.59394517702072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d593fe59d7376b%3A0xb52664d3bfc50f23!2z0JHQsNC30ZbQu9GW0L4g0L_RltGG0LXRgNGW0Y8!5e0!3m2!1suk!2sua!4v1683658612176!5m2!1suk!2sua"
            width="100%"
            height="340"
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

export default Contacts
