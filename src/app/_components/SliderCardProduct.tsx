'use client'
import Image from 'next/image';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

interface SliderCardProductProps {
  images: string[];
}

export function SliderCardProduct({ images }: SliderCardProductProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="swiperProductContainer w-full">
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as React.CSSProperties}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiperProduct rounded-bl-[40px]"
      >
        {images?.map((image) => (
          <SwiperSlide key={image}>
            <Image  src={image} alt="" width={670} height={550} className='object-cover h-[300px] lg:h-[550px]' />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiperProductThumb"
      >
        {images?.map((image) => (
          <SwiperSlide key={image}>
            <Image src={image} alt="" width={219} height={165} className='object-cover h-[100px] lg:h-[165px] rounded-tr-[40px] rounded-bl-[40px]' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
