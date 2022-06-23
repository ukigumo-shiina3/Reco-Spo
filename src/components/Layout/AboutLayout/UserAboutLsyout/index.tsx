/* eslint-disable @next/next/no-img-element */
import { VFC } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

export const UserAboutLayout: VFC = () => {
  return (
    <>
      <div className='bg-blue-100 h-full w-full flex flex-col items-center justify-center'>
        {/* 居住先を探す人ができること */}
        <div className='font-bold text-3xl text-center py-24'>居住先を探す人ができること</div>
        <div className=' flex flex-col xl:flex-row items-center justify-center container gap-8'>
          {/* 都道府県から探す */}
          <div className='sm:min-w-[360px] xl:ml-20'>
            <Box
              bg={useColorModeValue('white', 'gray.800')}
              maxW='sm'
              borderWidth='1px'
              rounded='lg'
              shadow='lg'
            >
              <div className='font-bold text-2xl text-center pt-12'>都道府県から探す</div>
              <img src='/about/prefecture-search.png' alt='都道府県から探す' />
              <div className='text-center pt-8 pb-12'>
                <p>興味のある自治体を</p>
                <p>都道府県から</p>
                <p>検索して探してみよう</p>
              </div>
            </Box>
          </div>
          {/* 居住支援から探す */}
          <div className='sm:min-w-[360px]'>
            <Box
              bg={useColorModeValue('white', 'gray.800')}
              maxW='sm'
              borderWidth='1px'
              rounded='lg'
              shadow='lg'
            >
              <div className='font-bold text-2xl text-center pt-12'>居住支援から探す</div>
              <img src='/about/system-search.png' alt='居住支援から探す' />
              <div className='text-center pt-8 pb-12'>
                <p>興味のある自治体を</p>
                <p>居住支援から</p>
                <p>検索して探してみよう</p>
              </div>
            </Box>
          </div>
          {/* マップから探す */}
          <div className='sm:min-w-[360px] xl:mr-16'>
            <Box
              bg={useColorModeValue('white', 'gray.800')}
              maxW='sm'
              borderWidth='1px'
              rounded='lg'
              shadow='lg'
            >
              <div className='font-bold text-2xl text-center pt-12'>マップから探す</div>
              <img src='/about/map-search.png' alt='マップから探す' />
              <div className='text-center pt-8 pb-12'>
                <p>興味のある自治体を</p>
                <p>マップから</p>
                <p>検索して探してみよう</p>
              </div>
            </Box>
          </div>
        </div>
        <Link href='/' passHref>
          <button className='bg-indigo-300 text-white p-8 my-24 rounded-full cursol-pointer '>
            <p>居住支援制度がある自治体をお探しの方は</p>
            <p>こちらをクリック</p>
          </button>
        </Link>
      </div>
    </>
  );
};
