import styles from './ModalWindow.module.scss'
import Button from '../Button/Button'

const ModalWindow = ({ heading, children, showModal, closeModal }) => {
  return (
    <>
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalInner}>
            <div className={styles.modalHeader}>
              {heading && <h6 className={styles.modaHeading}>{heading}</h6>}

              <Button
                type="button"
                icon="icon-close"
                onClickHendler={closeModal}
                className={styles.modalClose}
              />
            </div>
            <div className={styles.modaBody}>{children}</div>
          </div>
        </div>
      )}
    </>
  )
}

export default ModalWindow
