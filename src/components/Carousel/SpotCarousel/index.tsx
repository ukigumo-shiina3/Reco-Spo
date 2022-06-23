/* eslint-disable @next/next/no-img-element */
import React, { VFC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { css } from '@emotion/css';
import { Spot } from 'src/types/spot';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const mySwiper = css`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
  }

  .swiper-pagination-bullet {
    background: #fff;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: auto;
    max-height: 460px;
    object-fit: cover;
  }
`;

export type SpotCardProps = {
  spot?: Spot;
};

export const SpotCarousel: VFC<SpotCardProps> = () => {
  const slides = [
    {
      img: 'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      img: 'https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      img: 'https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      img: 'https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      img: 'https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
  ];

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className={mySwiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.img} alt='slide' />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
