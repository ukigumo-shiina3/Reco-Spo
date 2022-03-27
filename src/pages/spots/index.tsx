import { NextPage } from 'next';
import { SpotCard } from 'src/components/Spot/SpotCard';
import { useCallback, useEffect, useState } from 'react';
import { getSpots } from 'src/hooks/useSpotCardSelect';
import SearchModal from 'src/components/SearchModal';
import { UserLayout } from 'src/components/Layout/UserLayout';
import { Spot } from 'src/types/spot';
import { Pagination } from '@mantine/core';

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
      <SearchModal />
      <div className='flex flex-wrap gap-2 mt-5 sm:pl-24 md:gap-20 2xl:gap-8'>
        {spots.map((spot) => {
          console.log(spot);
          return <SpotCard key={spot.id} spot={spot} />;
        })}
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
