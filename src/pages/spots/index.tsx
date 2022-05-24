/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import SearchModal from 'src/components/SearchModal';
import { UserLayout } from 'src/components/Layout/UserLayout';
import { Pagination, SimpleGrid } from '@mantine/core';
import { WrapSpotCard } from 'src/components/Spot/WrapSpotCard';
import { useState } from 'react';

const Spots: NextPage = () => {
  const [activePage, setPage] = useState(1);

  return (
    <UserLayout>
      <div className='w-screen block'>
        <img src='/main-visuals/main-visual4.png' alt='サイト概要のメイン画像' className='w-full' />
      </div>
      <SearchModal />
      <div className='flex justify-center  mt-8 ml-3 mr-3'>
        <WrapSpotCard />
      </div>
      <Pagination
        page={activePage}
        onChange={setPage}
        total={5}
        color='dark'
        position='center'
        className='py-20'
      />
    </UserLayout>
  );
};

export default Spots;
