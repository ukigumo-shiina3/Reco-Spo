import { NextPage } from 'next';
import { SpotCard } from 'src/components/Spot/SpotCard';
import { useCallback, useEffect, useState } from 'react';
import { getSpots } from 'src/hooks/useSpotCardSelect';
import SearchModal from 'src/components/SearchModal';
import { UserLayout } from 'src/components/Layout/UserLayout';
import { Spot } from 'src/types/spot';
import { Pagination, SimpleGrid } from '@mantine/core';

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
      {/* <div className='flex flex-wrap gap-2 mt-5 sm:pl-24 md:gap-20 2xl:gap-8'> */}
      <div className='flex justify-center'>
        <SimpleGrid
          cols={3}
          spacing='md'
          breakpoints={[
            // { maxWidth: 980, cols: 3, spacing: 'md' },
            { maxWidth: 755, cols: 2, spacing: 'sm' },
            { maxWidth: 600, cols: 1, spacing: 'sm' },
          ]}
        >
          {spots.map((spot) => {
            console.log(spot);
            return <SpotCard key={spot.id} spot={spot} />;
          })}
        </SimpleGrid>
      </div>
      {/* </div> */}
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
