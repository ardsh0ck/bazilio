import { useRef, useEffect } from 'react'

function useDocumentTitle(title, prevailOnUnmount = false) {
  const titlePrefix = 'ardsh0ck.name | '
  const defaultTitle = useRef(document.title)

  useEffect(() => {
    document.title = titlePrefix + title
  }, [title])

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current
      }
    },
    [prevailOnUnmount]
  )
}

export default useDocumentTitle
