/* eslint-disable @next/next/no-img-element */
import type { VFC } from 'react';
import Link from 'next/link';
import { BackgroundImage, Center, Text, Box } from '@mantine/core';

export const SystemIntroduction: VFC = () => {
  return (
    <>
      <div>
        <div className='text-center  justify-center md:flex'>
          {/* 仕事に関する助成金とは */}
          <div className='w-full max-w-[600px] min-w-[380px] h-[384px]  m-auto md:m-0 '>
            <BackgroundImage src='/introduces/system-pic1.png' className='h-[384px] object-contain'>
              <div className='pt-12 '>
                {/* p='xl'は上下との行間 */}
                <Center p='xl' className=' md:p=xs md:text-xs'>
                  <Text color='#fff'>仕事に関する助成金とは？</Text>
                </Center>
                <Center p='xs'>
                  <Text color='#fff'>起業・継業、就職、就農などに対しての補助金制度です。</Text>
                </Center>
                <Center p='xs'>
                  <Text color='#fff'>漁師や船員など特定の仕事に対しての補助金もあります。</Text>
                </Center>
                <Center p='xl'>
                  <Link
                    href='https://www.vill.nishiokoppe.lg.jp/section/kikaku/hhlo2b0000001bdn.html'
                    passHref
                  >
                    <img
                      src='/buttons/property-button.png'
                      alt='参考物件のリンクボタン'
                      className='w-32 sm:w-40'
                    />
                  </Link>
                </Center>
              </div>
            </BackgroundImage>
          </div>
          {/* 住宅建築補助とは */}
          <div className='w-full max-w-[600px] min-w-[380px] h-[384px]  m-auto md:m-0 '>
            <BackgroundImage src='/introduces/system-pic2.png' className='h-[384px] object-contain'>
              <div className='pt-12'>
                <div>
                  {/* p='xl'は上下との行間 */}
                  <Center p='xl' className=' md:p=xs md:text-xs'>
                    <Text color='#fff'>住宅建築補助とは？ </Text>
                  </Center>
                  <Center p='xs'>
                    <Text color='#fff'>住宅を取得される方」を対象とした支援事業を実施。</Text>
                  </Center>
                  <Center p='xs'>
                    <Text color='#fff'>住宅取得費の一部を「支援金」として補助する制度。</Text>
                  </Center>
                  <Center p='xl'>
                    <Link
                      href='https://www.iju-join.jp/material/files/group/1/45c28765f28bde68.pdf'
                      passHref
                    >
                      <img
                        src='/buttons/property-button.png'
                        alt='参考物件のリンクボタン'
                        className='w-32 sm:w-40'
                      />
                    </Link>
                  </Center>
                </div>
              </div>
            </BackgroundImage>
          </div>
        </div>
        <div className='text-center  justify-center md:flex'>
          {/* 定住促進奨励金とは */}
          <div className='w-full max-w-[600px] min-w-[380px] h-[384px]  m-auto md:m-0 '>
            <BackgroundImage src='/introduces/system-pic3.png' className='h-[384px] object-contain'>
              <div className='pt-12 '>
                {/* p='xl'は上下との行間 */}
                <Center p='xl' className=' md:p=xs md:text-xs'>
                  <Text color='#fff'>定住促進奨励金とは？ </Text>
                </Center>
                <Center p='xs'>
                  <Text color='#fff'>定住の促進を目的として交付される助成金であり、</Text>
                </Center>
                <Center p='xs'>
                  <Text color='#fff'>住宅を購入することを条件に交付される奨励金</Text>
                </Center>
                <Center p='xl'>
                  <Link
                    href='https://www.city.satsumasendai.lg.jp/www/contents/1270046749584/index.html'
                    passHref
                  >
                    <img
                      src='/buttons/property-button.png'
                      alt='参考物件のリンクボタン'
                      className='w-32 sm:w-40'
                    />
                  </Link>
                </Center>
              </div>
            </BackgroundImage>
          </div>
          {/* お試し移住体験とは  */}
          <div className='w-full max-w-[600px] min-w-[380px] h-[384px]  m-auto md:m-0 '>
            <BackgroundImage src='/introduces/system-pic4.png' className='h-[384px] object-contain'>
              <div className='pt-12 '>
                {/* p='xl'は上下との行間 */}
                <Center p='xl' className=' md:p=xs md:text-xs'>
                  <Text color='#fff'>お試し移住体験とは</Text>
                </Center>
                <Center p='xs'>
                  <Text color='#fff'>田舎暮らしの移住を検討している人を対象に一定の</Text>
                </Center>
                <Center p='xs'>
                  <Text color='#fff'>期間実生活ができるように町が施設を借し出す制度</Text>
                </Center>
                <Center p='xl'>
                  <Link href='https://kurashi.city.nanto.toyama.jp/experience/' passHref>
                    <img
                      src='/buttons/property-button.png'
                      alt='参考物件のリンクボタン'
                      className='w-32 sm:w-40'
                    />
                  </Link>
                </Center>
              </div>
            </BackgroundImage>
          </div>
        </div>
      </div>
    </>
  );
};
