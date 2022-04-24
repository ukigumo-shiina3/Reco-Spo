/* eslint-disable @next/next/no-img-element */
import type { VFC } from 'react';
import Link from 'next/link';
import { BackgroundImage, Button, Center, Text } from '@mantine/core';

export const SystemIntroduction: VFC = () => {
  const COMPONENT1 = [
    {
      BACK_IMAGE: '/introduces/system-pic1.png',
      TITLE: '仕事に関する助成金とは？',
      MESSAGE1: '起業・継業、就職、就農などに対しての補助金制度です。',
      MESSAGE2: '漁師や船員など特定の仕事に対しての補助金もあります。',
      LINK: 'https://www.vill.nishiokoppe.lg.jp/section/kikaku/hhlo2b0000001bdn.html',
      BUTTON_TEXT: '参考物件はこちら→',
      IMAGE_SRC: '/buttons/property-button.png',
    },
    {
      BACK_IMAGE: '/introduces/system-pic2.png',
      TITLE: '住宅建築補助とは？',
      MESSAGE1: '住宅を取得される方」を対象とした支援事業を実施。',
      MESSAGE2: '住宅取得費の一部を「支援金」として補助する制度。',
      LINK: 'https://www.iju-join.jp/material/files/group/1/45c28765f28bde68.pdf',
      BUTTON_TEXT: '参考物件はこちら→',
      IMAGE_SRC: '/buttons/property-button.png',
    },
  ];
  const COMPONENT2 = [
    {
      BACK_IMAGE: '/introduces/system-pic3.png',
      TITLE: '定住促進奨励金とは？',
      MESSAGE1: '定住の促進を目的として交付される助成金であり、',
      MESSAGE2: '住宅を購入することを条件に交付される奨励金',
      LINK: 'https://www.city.satsumasendai.lg.jp/www/contents/1270046749584/index.html',
      BUTTON_TEXT: '参考物件はこちら→',
      IMAGE_SRC: '/buttons/property-button.png',
    },
    {
      BACK_IMAGE: '/introduces/system-pic4.png',
      TITLE: 'お試し移住体験とは',
      MESSAGE1: '田舎暮らしの移住を検討している人を対象に一定の',
      MESSAGE2: '期間実生活ができるように町が施設を借し出す制度',
      LINK: 'https://kurashi.city.nanto.toyama.jp/experience/',
      BUTTON_TEXT: '参考物件はこちら→',
      IMAGE_SRC: '/buttons/property-button.png',
    },
  ];
  return (
    <>
      <div>
        <div className='text-center  justify-center md:flex'>
          {COMPONENT1.map((component, i) => (
            <div className='w-full max-w-[600px] min-w-[380px] h-[384px]  m-auto md:m-0 ' key={i}>
              <BackgroundImage src={component.BACK_IMAGE} className='h-[384px] object-contain'>
                <div className='pt-12 '>
                  {/* p='xl'は上下との行間 */}
                  <Center p='xl' className=' md:p=xs md:text-xs'>
                    <Text color='#fff'>{component.TITLE}</Text>
                  </Center>
                  <Center p='xs'>
                    <Text color='#fff'>{component.MESSAGE1}</Text>
                  </Center>
                  <Center p='xs'>
                    <Text color='#fff'>{component.MESSAGE2}</Text>
                  </Center>
                  <Center p='xl'>
                    <Link href={component.LINK} passHref>
                      <Button
                        className='text-white border-white'
                        variant='outline'
                        radius='md'
                        size='md'
                      >
                        {component.BUTTON_TEXT}
                      </Button>
                    </Link>
                  </Center>
                </div>
              </BackgroundImage>
            </div>
          ))}
        </div>
        <div className='text-center  justify-center md:flex'>
          {COMPONENT2.map((component, i) => (
            <div className='w-full max-w-[600px] min-w-[380px] h-[384px]  m-auto md:m-0 ' key={i}>
              <BackgroundImage src={component.BACK_IMAGE} className='h-[384px] object-contain'>
                <div className='pt-12 '>
                  {/* p='xl'は上下との行間 */}
                  <Center p='xl' className=' md:p=xs md:text-xs'>
                    <Text color='#fff'>{component.TITLE}</Text>
                  </Center>
                  <Center p='xs'>
                    <Text color='#fff'>{component.MESSAGE1}</Text>
                  </Center>
                  <Center p='xs'>
                    <Text color='#fff'>{component.MESSAGE2}</Text>
                  </Center>
                  <Center p='xl'>
                    <Link href={component.LINK} passHref>
                      <Button
                        className='text-white border-white'
                        variant='outline'
                        radius='md'
                        size='md'
                      >
                        {component.BUTTON_TEXT}
                      </Button>
                    </Link>
                  </Center>
                </div>
              </BackgroundImage>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
