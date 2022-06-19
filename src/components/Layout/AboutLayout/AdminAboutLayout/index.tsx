/* eslint-disable @next/next/no-img-element */
import { VFC } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

export const AdminAboutLayout: VFC = () => {
  return (
    <>
      <div className='bg-indigo-100 h-full w-full flex flex-col items-center justify-center'>
        {/* 自治体を管理する人ができること */}
        <div className='font-bold text-3xl text-center py-24'>自治体を管理する人ができること</div>
        <div className='flex flex-col xl:flex-row items-center justify-center container gap-32'>
          {/* 自治体を登録する */}
          <div className='sm:min-w-[360px] xl:ml-20'>
            <Box
              bg={useColorModeValue('white', 'gray.800')}
              maxW='sm'
              borderWidth='1px'
              rounded='lg'
              shadow='lg'
            >
              <div className='font-bold text-2xl text-center pt-12'>自治体を登録する</div>
              <img src='/about/admin-register.png' alt='自治体を登録する' />
              <div className='text-center pb-8'>
                <p>管理画面から</p>
                <p>自身の自治体を</p>
                <p>登録してみよう</p>
              </div>
            </Box>
          </div>
          {/* スポットを登録する */}
          <div className='sm:min-w-[360px] xl:mr-24'>
            <Box
              bg={useColorModeValue('white', 'gray.800')}
              maxW='sm'
              borderWidth='1px'
              rounded='lg'
              shadow='lg'
            >
              <div className='font-bold text-2xl text-center pt-12'>スポットを登録する</div>
              <img src='/about/spot-register.png' alt='スポットを登録する' />
              <div className='text-center pb-8'>
                <p>管理画面から</p>
                <p>公表するスポットを</p>
                <p>登録してみよう</p>
              </div>
            </Box>
          </div>
        </div>
        <Link href='/admins/signin' passHref>
          <button className='bg-indigo-300 text-white p-8 my-24 rounded-full cursol-pointer'>
            <p>居住支援制度がある自治体をお探しの方は</p>
            <p>こちらをクリック</p>
          </button>
        </Link>
      </div>
    </>
  );
};
