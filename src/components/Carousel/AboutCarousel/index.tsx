/* eslint-disable @next/next/no-img-element */
import React, { VFC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { css } from '@emotion/css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import { Button } from '@mantine/core';

const mySwiper = css`
  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
  }

  .swiper-pagination-bullet {
    background: #fff;
  }
`;

export const AboutCarousel: VFC = () => {
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
        {/* メインビジュアル */}
        <SwiperSlide>
          <div>
            <figure className='relative flex justify-center items-center w-full text-xs sm:text-base'>
              <img
                src='/main-visuals/main-visual0.png'
                alt='サイト概要のメイン画像'
                className='w-full'
              />
              <figcaption className='absolute hidden sm:block bg-indigo-300 opacity-90 p-8 z-index-1'>
                <div className=''>
                  <p className='text-white font-bold pt-2 lg:pt-4 lg:text-xl xl:text-2xl'>
                    Reco Spoは思い描く理想に合った田舎暮らしを実現したい人と
                  </p>
                  <p className='text-white font-bold pt-2 lg:pt-4 lg:text-xl xl:text-2xl'>
                    居住支援制度を公表し居住者を増やしたい自治体を結びつける
                  </p>
                  <p className='text-white font-bold pt-2 lg:pt-4 lg:text-xl xl:text-2xl'>
                    プラットフォームです。
                  </p>
                </div>
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
        {/* 仕事に関する助成金 */}
        <SwiperSlide>
          <div>
            <figure className='relative flex justify-center items-center w-full text-xs sm:text-base'>
              <img src='/about/about-pic2.png' alt='サイト概要のメイン画像' className='w-full' />
              <figcaption className='absolute left-0 ml-8 sm:ml-24 bg-indigo-300 opacity-90 rounded-full p-6 md:p-12 z-index-1'>
                <div className=''>
                  <p className='text-white text-center pt-2 lg:pt-4 lg:text-xl pb-2 sm:pb-4 '>
                    仕事に関する助成金
                  </p>
                  <Link
                    href='https://www.vill.nishiokoppe.lg.jp/section/kikaku/hhlo2b0000001bdn.html'
                    passHref
                  >
                    <Button
                      className='text-white border-white text-xs'
                      variant='outline'
                      radius='sm'
                      size='sm'
                    >
                      参考リンクはこちら→
                    </Button>
                  </Link>
                </div>
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
        {/* 住宅建築補助 */}
        <SwiperSlide>
          <div>
            <figure className='relative flex justify-center items-center w-full text-xs sm:text-base'>
              <img src='/about/about-pic3.png' alt='サイト概要のメイン画像' className='w-full' />
              <figcaption className='absolute left-0 ml-8 sm:ml-24 bg-indigo-300 opacity-90 rounded-full p-4 sm:p-8 md:p-12 z-index-1'>
                <div className=''>
                  <p className='text-white text-center pt-2 lg:pt-4 lg:text-xl pb-2 sm:pb-4 '>
                    住宅建築補助
                  </p>
                  <Link
                    href='https://www.iju-join.jp/material/files/group/1/45c28765f28bde68.pdf'
                    passHref
                  >
                    <Button
                      className='text-white border-white text-xs'
                      variant='outline'
                      radius='sm'
                      size='sm'
                    >
                      参考リンクはこちら→
                    </Button>
                  </Link>
                </div>
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
        {/* 定住促進奨励金 */}
        <SwiperSlide>
          <div>
            <figure className='relative flex justify-center items-center w-full text-xs sm:text-base'>
              <img src='/about/about-pic4.png' alt='サイト概要のメイン画像' className='w-full' />
              <figcaption className='absolute left-0 ml-8 sm:ml-24 bg-indigo-300 opacity-90 rounded-full p-6 md:p-12 z-index-1'>
                <div className=''>
                  <p className='text-white text-center pt-2 lg:pt-4 lg:text-xl pb-2 sm:pb-4 '>
                    定住促進奨励金
                  </p>
                  <Link
                    href='https://www.city.satsumasendai.lg.jp/www/contents/1270046749584/index.html'
                    passHref
                  >
                    <Button
                      className='text-white border-white text-xs'
                      variant='outline'
                      radius='sm'
                      size='sm'
                    >
                      参考リンクはこちら→
                    </Button>
                  </Link>
                </div>
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
        {/* お試し移住体験 */}
        <SwiperSlide>
          <div>
            <figure className='relative flex justify-center items-center w-full text-xs sm:text-base'>
              <img src='/about/about-pic1.png' alt='サイト概要のメイン画像' className='w-full' />
              <figcaption className='absolute left-0 ml-8 sm:ml-24 bg-indigo-300 opacity-90 rounded-full p-6 md:p-12 z-index-1'>
                <div className=''>
                  <p className='text-white text-center pt-2 lg:pt-4 lg:text-xl pb-2 sm:pb-4 '>
                    お試し移住体験
                  </p>
                  <Link href='https://kurashi.city.nanto.toyama.jp/experience/' passHref>
                    <Button
                      className='text-white border-white text-xs'
                      variant='outline'
                      radius='sm'
                      size='sm'
                    >
                      参考リンクはこちら→
                    </Button>
                  </Link>
                </div>
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
