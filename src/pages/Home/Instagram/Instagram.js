import Button from '../../../components/organism/Button/Button'
import styles from './Instagram.module.scss'
import insta1 from '../../../assets/images/mocks/insta1.jpg'
import insta2 from '../../../assets/images/mocks/insta2.jpg'
import insta3 from '../../../assets/images/mocks/insta3.jpg'
import insta4 from '../../../assets/images/mocks/insta4.jpg'
import insta5 from '../../../assets/images/mocks/insta5.jpg'

const Instagram = () => {
  return (
    <section className={styles.instagram}>
      <div className="inner">
        <div className={styles.instagramHeader}>
          <div>
            <h6 className={styles.instagramHeaderHeading}>
              Підпишись на інстаграм
            </h6>
            <p className={styles.instagramHeaderCaption}>
              та дізнавайся першим про акції та новини Базиліо
            </p>
          </div>

          <div className="hidden md:flex">
            <Button
              color="orange"
              text="Підписатися"
              href="https://www.instagram.com/bazilio_prk/"
            />
          </div>
        </div>

        <ul className={styles.instagramImages}>
          <li className={styles.instagramImagesItem}>
            <img src={insta1} className={styles.instagramImage} alt="" />
          </li>
          <li className={styles.instagramImagesItem}>
            <img src={insta2} className={styles.instagramImage} alt="" />
          </li>
          <li className={styles.instagramImagesItem}>
            <img src={insta3} className={styles.instagramImage} alt="" />
          </li>
          <li className={styles.instagramImagesItem}>
            <img src={insta4} className={styles.instagramImage} alt="" />
          </li>
          <li className={styles.instagramImagesItem}>
            <img src={insta5} className={styles.instagramImage} alt="" />
          </li>
        </ul>

        <div className="md:hidden mt-6">
          <Button
            color="orange"
            text="Підписатися"
            href="https://www.instagram.com/bazilio_prk/"
          />
        </div>
      </div>
    </section>
  )
}

export default Instagram
