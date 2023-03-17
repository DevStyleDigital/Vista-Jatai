import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { CarroselStyle } from './style';

const CarroselSection = () => {
  return (
    <CarroselStyle>
      <Swiper pagination modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <Image
            alt="banner-carrosel"
            src="/carrosel/Galeria-Lazer-01.png"
            width={1600}
            height={640}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="banner-carrosel"
            src="/carrosel/Fachada_Varanda.png"
            width={1600}
            height={640}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="banner-carrosel"
            src="/carrosel/Bicicletario_JeJ_Jatai_p.png"
            width={1600}
            height={640}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="banner-carrosel"
            src="/carrosel/Espaco_Fogo.png"
            width={1600}
            height={640}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="banner-carrosel"
            src="/carrosel/Fitness.png"
            width={1600}
            height={640}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="banner-carrosel"
            src="/carrosel/Gourmet.png"
            width={1600}
            height={640}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="banner-carrosel"
            src="/carrosel/Kids_p.png"
            width={1600}
            height={640}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="banner-carrosel"
            src="/carrosel/Minimarket_p.png"
            width={1600}
            height={640}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="banner-carrosel"
            src="/carrosel/Pet.png"
            width={1600}
            height={640}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="banner-carrosel"
            src="/carrosel/Portaria_p.png"
            width={1600}
            height={640}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="banner-carrosel"
            src="/carrosel/Redário.png"
            width={1600}
            height={640}
          />
        </SwiperSlide>
      </Swiper>
    </CarroselStyle>
  );
};

export default CarroselSection;
