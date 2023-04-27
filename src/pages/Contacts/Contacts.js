import clsx from 'clsx'
import styles from './Contacts.module.scss'

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={clsx(styles.contacts, 'inner')}>Contacts</div>
    </div>
  )
}

export default Contacts
