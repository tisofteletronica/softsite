'use client'
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface SliderMontagemProps {
  items: string[]
}

export function SliderImages({ items }: SliderMontagemProps) {
  const pagination = {
    clickable: true
  };

  return (
    <Swiper
      loop
      slidesPerView={1}
      spaceBetween={20}
      pagination={pagination}
      centeredSlides={true}
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
          slidesPerView: 3.8,
          spaceBetween: 40,
          pagination: false,
        },
      }}
      modules={[Navigation, Pagination]}
      className="SliderMontagem"
    >
      {items?.map((item, index) => (
        <SwiperSlide key={index}>
          <div className='border border-[#707070] rounded-tr-[40px] rounded-bl-[40px] h-[378px] flex items-center justify-center overflow-hidden'>
            <Image src={item} width={587} height={378} alt={`Imagem ${index}`} className='max-h-[378px] object-cover' />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
