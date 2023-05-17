import { useNavigate, useParams } from 'react-router-dom'
import Breadcrumbs from '../../../components/organism/Breadcrumbs/Breadcrumbs'
import styles from './Action.module.scss'
import actions from '../../../mocks/actions'
import { useEffect } from 'react'
import useDocumentTitle from '../../../utils/setDocumentTitle'
import Button from '../../../components/organism/Button/Button'
import clsx from 'clsx'

const Action = () => {
  const params = useParams()
  const navigate = useNavigate()
  const action = actions.find((action) => action.slug === params.slug)

  useEffect(() => {
    if (!action) {
      navigate('..', { relative: 'path' })
    }
  }, [action, navigate])

  useDocumentTitle(action.title)

  return (
    <>
      <Breadcrumbs
        middle={{ href: '/actions', text: 'Акції' }}
        title={action.title}
      />

      <div className={styles.action}>
        <img
          src={action.banner}
          className={styles.actionBanner}
          alt={action.title}
        />

        <h1 className={clsx(styles.actionHeading, 'heading')}>
          {action.title}
        </h1>

        <time className={styles.actionPeriod}>{action.period}</time>

        <div
          dangerouslySetInnerHTML={{ __html: action.description }}
          className={styles.actionDescription}
        />

        <Button href={'#'} color="orange" text="Скоштувати" />
      </div>
    </>
  )
}

export default Action
