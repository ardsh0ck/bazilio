import clsx from 'clsx'
import styles from './FormControl.module.scss'

const FormControl = ({
  type,
  name,
  value,
  onChangeHandle,
  id,
  required,
  min,
  max,
  rows,
  accept,
  label,
  toggle,
  select,
  error,
  color,
  className,
}) => {
  return (
    <>
      {type !== 'toggle' && (
        <label
          htmlFor={id}
          className={clsx(
            styles.formControl,
            {
              [styles.formControlText]:
                type === 'text' ||
                type === 'tel' ||
                type === 'email' ||
                type === 'password' ||
                type === 'textarea',
              [styles.formControlCheckbox]: type === 'checkbox',
              [styles.formControlSelect]: type === 'select',
              [styles.formControlBgColor]: color === 'bg',
            },
            className
          )}
        >
          {(type === 'text' ||
            type === 'tel' ||
            type === 'email' ||
            type === 'password' ||
            type === 'checkbox') && (
            <>
              <input
                type={type}
                name={name}
                value={value}
                onChange={onChangeHandle}
                id={id}
                required={required}
                minLength={min}
                maxLength={max}
                accept={accept}
                placeholder=" "
              />
              <div className={styles.formControlLabel}>{label}</div>
            </>
          )}

          {type === 'textarea' && (
            <>
              <textarea
                type={type}
                name={name}
                value={value}
                onChange={onChangeHandle}
                id={id}
                required={required}
                rows={rows}
                placeholder=" "
              ></textarea>
              <div className={styles.formControlLabel}>{label}</div>
            </>
          )}

          {type === 'select' && (
            <select value={value} onChange={onChangeHandle} name={name}>
              {select.map((item, index) => {
                return (
                  <option value={item.value} key={index + item.value}>
                    {item.label}
                  </option>
                )
              })}
            </select>
          )}
        </label>
      )}

      {type === 'toggle' && (
        <div
          className={clsx(
            styles.formControl,
            styles.formControlToggle,
            className
          )}
        >
          {toggle.map((item) => {
            return (
              <label
                htmlFor={id}
                className={styles.formControlToggleItem}
                key={item.id + item.value}
              >
                <div className={styles.formControlToggleItem}>
                  <input
                    type="radio"
                    id={item.id}
                    name={item.name}
                    value={item.value}
                    onChange={item.onChange}
                    required={required}
                    checked={item.checked}
                  />
                  <div className={styles.formControlLabel}>{item.label}</div>
                </div>
              </label>
            )
          })}
        </div>
      )}
    </>
  )
}

export default FormControl
