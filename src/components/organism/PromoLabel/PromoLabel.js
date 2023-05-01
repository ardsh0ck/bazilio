import styles from './PromoLabel.module.scss'
import clsx from 'clsx'

const PromoLabel = ({ type, text, className }) => {
  return (
    <div
      className={clsx(
        styles.label,
        {
          [styles.labelNew]: type === 'new',
          [styles.labelWeek]: type === 'week',
        },
        className
      )}
    >
      {text}
    </div>
  )
}

export default PromoLabel
