'use client'
import { LineTimeResponse } from '@/services/aboutService/lineTime';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

export function Slider({ content }: LineTimeResponse) {
  const pagination = {
    clickable: true
  };

  return (
    <div className='slider-about'>
      <Swiper
        pagination={pagination}
        navigation
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {content.map((slide) => (
          <SwiperSlide key={slide.id} className='px-3 lg:px-[180px] pt-3 pb-[31px] bg-[#F7F6FB] lg:bg-bgSlide lg:bg-transparent'>
            <strong
              className='text-[36px] font-semibold text-orange tracking-[1.7px] leading-[56px] italic mb-[9px]'
            >
              {slide.anos}
            </strong>

            <p
              className='text-[18px] lg:text-[17px] font-medium leading-[23px] lg:leading-[23px] tracking-[2px] text-gray'
            >
              {slide.historico}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
