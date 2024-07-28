'use client'
import { CardSlider, CardSliderProps } from '@/app/_components/CardSlider';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface SliderMontagemProps {
  items: CardSliderProps[]
}

export function SliderMontagem({ items }: SliderMontagemProps) {
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
          slidesPerView: 3.1,
          spaceBetween: 20,
          pagination: false,
        },
      }}
      modules={[Navigation, Pagination]}
      className="SliderMontagem"
    >
      {items?.map((item, index) => (
        <SwiperSlide key={index}>
          <CardSlider servicos={item.servicos} descricao={item.descricao} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
