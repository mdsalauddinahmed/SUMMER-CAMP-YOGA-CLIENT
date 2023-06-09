import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import banner from '../../assets/banner.jpg'
const Banner = () => {
    const swiperParams = {
        // Configuration options
        slidesPerView: 2,
        spaceBetween: 30,
        // ...
      };
    return (
        <div>
            <Swiper style={{
            "background-image":
              `url(${banner} )`,
          }} >
      <SwiperSlide  >
       
        <h3>Slide 2</h3>
        <p>Some text content for slide 2</p>
      </SwiperSlide>
      <SwiperSlide>
        <h3>Slide 2</h3>
        <p>Some text content for slide 2</p>
      </SwiperSlide>
      <SwiperSlide>
         <h2>hello</h2>
      </SwiperSlide>
    </Swiper>
        </div>
    );
};

export default Banner;