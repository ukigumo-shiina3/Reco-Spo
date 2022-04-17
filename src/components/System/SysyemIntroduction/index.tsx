/* eslint-disable @next/next/no-img-element */
import type { VFC } from 'react';
import Link from 'next/link';
import { BackgroundImage, Center, Text, Box } from '@mantine/core';
import { ClassNames } from '@emotion/react';
import ICON from 'src/images/Variable-Button.svg';

export const SysyemIntroduction: VFC = () => {
  return (
    <>
      {/* 元の */}
      {/* <div>
        <div className='w-screen block '>
          <div className='sm:flex justify-center'>
            <div className='max-w-[540px]'>
              仕事に関する助成金とは
              <div className='relative text-center text-xs sm:text-base xl:text-xl'>
                <img
                  src='/about-pic1.png'
                  alt='制度概要の画像'
                  className='m-auto w-full h-80 sm:h-96'
                />
                <div className='absolute text-white text-center top-16 py-5 px-8 sm:top-20 sm:left-10 2xl:top-50 2xl:left-32'>
                  <p>仕事に関する助成金とは？ </p>
                  <p className='pt-10'>起業・継業、就職、就農などに対しての補助金制度です。</p>
                  <p className='pt-3 pb-10'>漁師や船員など特定の仕事に対しての補助金もあります。</p>
                  <div className='flex justify-center'>
                    <Link
                      href='https://www.vill.nishiokoppe.lg.jp/section/kikaku/hhlo2b0000001bdn.html'
                      passHref
                    >
                      <img
                        src='/property-button.png'
                        alt='参考物件のリンクボタン'
                        className='w-32 sm:w-40'
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            住宅建築補助とは
            <div className='max-w-[540px]'>
              <div className='relative text-center text-xs sm:text-base xl:text-xl'>
                <img
                  src='/about-pic2.png'
                  alt='制度概要の画像'
                  className='m-auto w-full h-80 sm:h-96'
                />
                <div className='absolute text-white text-center top-16 py-5 px-10 sm:px-14 sm:top-20 sm:left-10 2xl:top-50 2xl:left-32'>
                  <p>住宅建築補助とは？ </p>
                  <p className='pt-10'>住宅を取得される方」を対象とした支援事業を実施。</p>
                  <p className='pt-3 pb-10'>住宅取得費の一部を「支援金」として補助する制度。</p>
                  <div className='flex justify-center'>
                    <Link
                      href='https://www.iju-join.jp/material/files/group/1/45c28765f28bde68.pdf'
                      passHref
                    >
                      <img
                        src='/property-button.png'
                        alt='参考物件のリンクボタン'
                        className='w-32 sm:w-40'
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          定住促進奨励金とは
          <div className='sm:flex  justify-center'>
            <div className='max-w-[540px]'>
              <div className='relative text-center text-xs sm:text-base xl:text-xl'>
                <img
                  src='/about-pic3.png'
                  alt='制度概要の画像'
                  className='m-auto w-full h-80 sm:h-96'
                />
                <div className='absolute text-white text-center top-16 py-5 px-12 sm:px-14 sm:top-20 sm:left-10 2xl:top-50 2xl:left-32'>
                  <p>定住促進奨励金とは？ </p>
                  <p className='pt-10'>定住の促進を目的として交付される助成金であり、</p>
                  <p className='pt-3 pb-10'>住宅を購入することを条件に交付される奨励金</p>
                  <div className='flex justify-center'>
                    <Link
                      href='https://www.city.satsumasendai.lg.jp/www/contents/1270046749584/index.html'
                      passHref
                    >
                      <img
                        src='/property-button.png'
                        alt='参考物件のリンクボタン'
                        className='w-32 sm:w-40'
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

             お試し移住体験とは 
            <div className='max-w-[540px]'>
              <div className='relative text-center text-xs sm:text-base xl:text-xl'>
                <img
                  src='/about-pic4.png'
                  alt='制度概要の画像'
                  className='m-auto w-full h-80 sm:h-96'
                />
                <div className='absolute text-white text-center top-16 py-5 px-12 sm:px-14 sm:top-20 sm:left-10 2xl:top-50 2xl:left-32'>
                  <p>お試し移住体験とは </p>
                  <p className='pt-10'>田舎暮らしの移住を検討している人を対象に一定の</p>
                  <p className='pt-3 pb-10'>期間実生活ができるように町が施設を借し出す制度</p>
                  <div className='flex justify-center'>
                    <Link href='https://kurashi.city.nanto.toyama.jp/experience/' passHref>
                      <img
                        src='/property-button.png'
                        alt='参考物件のリンクボタン'
                        className='w-32 sm:w-40'
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* 元の */}

      {/* <div className='w-screen block '> */}
      <div>
        {/* ue */}
        <div className='text-center  justify-center md:flex'>
          {/* 仕事に関する助成金とは */}
          <div className='w-full max-w-[440px] min-w-[380px] h-[384px]  m-auto md:m-0 '>
            <BackgroundImage
              src='/about-pic1-new.png'
              // radius='sm'
              className='h-[384px] object-contain'
            >
              {/* <div className='pt-20'> */}
              <div className='pt-0 '>
                {/* p='xl'は上下との行間 */}
                <Center p='xl' className=' md:p=xs md:text-xs'>
                  <Text color='#fff'>仕事に関する助成金とは？</Text>
                </Center>
                <Center p='xl'>
                  <Text color='#fff'>起業・継業、就職、就農などに対しての補助金制度です。</Text>
                </Center>
                <Center p='xl'>
                  <Text color='#fff'>漁師や船員など特定の仕事に対しての補助金もあります。</Text>
                </Center>
                <Center p='xl'>
                  {/* <div className='flex justify-center'> */}
                  <Link
                    href='https://www.vill.nishiokoppe.lg.jp/section/kikaku/hhlo2b0000001bdn.html'
                    passHref
                  >
                    <img
                      src='/Variable-Button.png'
                      alt='参考物件のリンクボタン'
                      className='w-32 sm:w-40'
                    />
                  </Link>
                </Center>
                {/* </div> */}
              </div>
            </BackgroundImage>
          </div>
          {/* 住宅建築補助とは */}
          <div className='w-full max-w-[440px] min-w-[380px] h-[384px]  m-auto md:m-0 '>
            <BackgroundImage
              // src='https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80'
              src='/about-pic2-new.png'
              // radius='sm'
              // className='h-[384px] w-[584px]  max-w-[540px]'
              className='h-[384px] object-contain'
            >
              {/* <div className='pt-20'> */}
              <div className='pt-0 '>
                {/* p='xl'は上下との行間 */}
                <Center p='xl' className=' md:p=xs md:text-xs'>
                  <Text color='#fff'>住宅建築補助とは？ </Text>
                </Center>
                <Center p='xl'>
                  <Text color='#fff'>住宅を取得される方」を対象とした支援事業を実施。</Text>
                </Center>
                <Center p='xl'>
                  <Text color='#fff'>住宅取得費の一部を「支援金」として補助する制度。</Text>
                </Center>
                <Center p='xl'>
                  {/* <div className='flex justify-center'> */}
                  <Link
                    href='https://www.iju-join.jp/material/files/group/1/45c28765f28bde68.pdf'
                    passHref
                  >
                    <img
                      src='/Variable-Button.png'
                      alt='参考物件のリンクボタン'
                      className='w-32 sm:w-40'
                    />
                  </Link>
                </Center>
                {/* </div> */}
              </div>
            </BackgroundImage>
          </div>
        </div>
        {/* ue */}
        <div className='text-center  justify-center md:flex'>
          {/* 定住促進奨励金とは */}
          <div className='w-full max-w-[440px] min-w-[380px] h-[384px]  m-auto md:m-0 '>
            <BackgroundImage
              // src='https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80'
              src='/about-pic3-new.png'
              // radius='sm'
              // className='h-[384px] w-[584px]  max-w-[540px]'
              className='h-[384px] object-contain'
            >
              {/* <div className='pt-20'> */}
              <div className='pt-0 '>
                {/* p='xl'は上下との行間 */}
                <Center p='xl' className=' md:p=xs md:text-xs'>
                  <Text color='#fff'>定住促進奨励金とは？ </Text>
                </Center>
                <Center p='xl'>
                  <Text color='#fff'>定住の促進を目的として交付される助成金であり、</Text>
                </Center>
                <Center p='xl'>
                  <Text color='#fff'>住宅を購入することを条件に交付される奨励金</Text>
                </Center>
                <Center p='xl'>
                  {/* <div className='flex justify-center'> */}
                  <Link
                    href='https://www.city.satsumasendai.lg.jp/www/contents/1270046749584/index.html'
                    passHref
                  >
                    <img
                      src='/Variable-Button.png'
                      alt='参考物件のリンクボタン'
                      className='w-32 sm:w-40'
                    />
                  </Link>
                </Center>
                {/* </div> */}
              </div>
            </BackgroundImage>
          </div>
          {/* お試し移住体験とは  */}
          <div className='w-full max-w-[440px] min-w-[380px] h-[384px]  m-auto md:m-0 '>
            <BackgroundImage
              // src='https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80'
              src='/about-pic4-new.png'
              // radius='sm'
              // className='h-[384px] w-[584px]  max-w-[540px]'
              className='h-[384px] object-contain'
            >
              {/* <div className='pt-20'> */}
              <div className='pt-0 '>
                {/* p='xl'は上下との行間 */}
                <Center p='xl' className=' md:p=xs md:text-xs'>
                  <Text color='#fff'>お試し移住体験とは</Text>
                </Center>
                <Center p='xl'>
                  <Text color='#fff'>田舎暮らしの移住を検討している人を対象に一定の</Text>
                </Center>
                <Center p='xl'>
                  <Text color='#fff'>期間実生活ができるように町が施設を借し出す制度</Text>
                </Center>
                <Center p='xl'>
                  {/* <div className='flex justify-center'> */}
                  <Link href='https://kurashi.city.nanto.toyama.jp/experience/' passHref>
                    <img
                      src='/Variable-Button.png'
                      alt='参考物件のリンクボタン'
                      className='w-32 sm:w-40'
                    />
                  </Link>
                </Center>
                {/* </div> */}
              </div>
            </BackgroundImage>
          </div>
        </div>
      </div>
    </>
  );
};
