"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import  UserCommentCard  from "./UserCommentCard";

import "swiper/css";
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination } from "swiper";
import {UserCommentsProfile} from '../../../lib/data'

const CustomCarousel = () => {
  return (
    <>
      <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={2}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          scrollbar={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Navigation, Pagination]}
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