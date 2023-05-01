import clsx from 'clsx'
import styles from './FormControl.module.scss'

const FormControl = ({ type, label }) => {
  return (
    <>
      {type === 'checkbox' && (
        <label className={clsx(styles.formControl, styles.formControlCheckbox)}>
          <input type="checkbox" />
          <div className={styles.formControlLabel}>{label}</div>
        </label>
      )}
    </>
  )
}

export default FormControl
