'use client'
import { CardSlider, CardSliderProps } from '@/app/_components/CardSlider';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface SliderMontagemProps {
  items: CardSliderProps[];
  className?: string;
}

export function SliderMontagem({ items, className }: SliderMontagemProps) {
  const pagination = {
    clickable: true
  };

  return (
    <Swiper
      loop
      slidesPerView={1}
      spaceBetween={20}
      navigation={true}
      pagination={pagination}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
          pagination: false,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          pagination: false,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
          pagination: false,
        },
      }}
      modules={[Navigation, Pagination, Autoplay]}
      className="SliderMontagem lg:!ml-[-40px]"
    >
      {items?.map((item, index) => (
        <SwiperSlide key={index}>
          <CardSlider urlImg1={item.urlImg1} servicos={item.servicos} descricao={item.descricao} className={className} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
