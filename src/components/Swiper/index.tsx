'use client';

import desentupidora from '@/assets/desentupidora.png';
import estore from '@/assets/estore.png';
import fxmoney from '@/assets/fxmoney.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../../styles/globals.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { CardProject } from '@/app/project/ProjectCard';

export const SwiperContainer: React.FC = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> 
         <CardProject title='typescript-orm' 
         imgSrc={estore}
         link=''
         />
        </SwiperSlide>
       
        <SwiperSlide>
         <CardProject title='typescript-orm' 
         imgSrc={desentupidora}
         link=''
         />
        </SwiperSlide>
       
        <SwiperSlide>
         <CardProject title='typescript-orm' 
         imgSrc={fxmoney}
         link=''
         />
        </SwiperSlide>
       
       
      
      </Swiper>
    </>
  );
}
