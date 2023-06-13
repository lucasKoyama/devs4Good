import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import banner1 from '../images/banner1.webp'
import banner2 from '../images/banner2.webp'
import banner3 from '../images/banner3.webp'
import '../styles/sections/Carousel.css';

function Carousel() {
  return (
    <section className="carousel">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={ banner2 } />
          <div className="text">
            <h2 className="title">Uma empresa sem fins lucrativos</h2>
            <p className="description">Criamos websites e soluções para ONGs e projetos sociais.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ banner3 } />
          <div className="text">
            <h2 className="title">Selecionamos Ongs e Projetos Sociais</h2>
            <p className="description">Ficou interessado?</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ banner1 } />
          <div className="text">
            <h2 className="title">Todo o serviço é grátis</h2>
            <p className="description">Nossa equipe de desenvolvedores são voluntários digitais e queremos te ajudar a ajudar.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Carousel;
