"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import  UserCommentCard  from "./UserCommentCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Autoplay, Keyboard, Navigation, Pagination } from "swiper";
import {UserCommentsProfile} from '../../../lib/data'

const CustomCarousel = () => {
  return (
    <>
      <Swiper
       centeredSlides={true}
       autoplay={{
         delay: 2500,
         disableOnInteraction: false,
       }}
       pagination={{
         clickable: true,
       }}
       navigation={true}
        slidesPerView={1}
        spaceBetween={10}
       
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {UserCommentsProfile.map(({ name, src, showLess}, index) => (
          <SwiperSlide key={index}>
            <UserCommentCard src={src} name={name} comments={showLess}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default CustomCarousel;