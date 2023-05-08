import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Autoplay, Pagination, Navigation } from 'swiper'
import styles from './Slider.module.scss'
import { Link } from 'react-router-dom'

const Slider = ({ data }) => {
  return (
    <div className={styles.slider}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableoninteraction: false }}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id} className={styles.sliderSlide}>
              <Link to={item.link}>
                <img src={item.image} alt={item?.alt} />
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Slider
