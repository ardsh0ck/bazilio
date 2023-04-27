import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const path = useLocation()

  useEffect(() => {
    window.scroll(0, 0)
  }, [path])
}

export default ScrollToTop
