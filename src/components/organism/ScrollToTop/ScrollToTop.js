import { useEffect, useState } from 'react'
import clsx from 'clsx'
import styles from './ScrollToTop.module.scss'
import { Icons } from '../Icons/Icons'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className={clsx(styles.scroll, 'inner')}>
      {isVisible && (
        <button
          type="button"
          className={styles.scrollButton}
          onClick={scrollToTop}
        >
          <Icons name="icon-arrow-right" />
        </button>
      )}
    </div>
  )
}

export default ScrollToTop
