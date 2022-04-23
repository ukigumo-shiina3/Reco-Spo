/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import { SpotCard } from 'src/components/Spot/SpotCard';
import { useCallback, useEffect, useState } from 'react';
import { getSpots } from 'src/hooks/useSpotCardSelect';
import SearchModal from 'src/components/SearchModal';
import { UserLayout } from 'src/components/Layout/UserLayout';
import { Spot } from 'src/types/spot';
import { Pagination, SimpleGrid } from '@mantine/core';
import { WrapSpotCard } from 'src/components/Spot/WrapSpotCard';

const Spots: NextPage = () => {
  const [spots, setSpots] = useState<Spot[]>([]);
  const [activePage, setPage] = useState(1);

  const fetchSpot = useCallback(async () => {
    const data = await getSpots();
    setSpots(data || []);
  }, []);

  useEffect(() => {
    fetchSpot();
  }, [fetchSpot]);

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
