import { NextPage } from 'next';
import { SpotCard } from 'src/components/Spot/SpotCard';
import { SpotPagination } from 'src/components/Spot/SpotPagination';
import { UserLayout } from 'src/components/layout/UserLayout';
import { useCallback, useEffect, useState } from 'react';
import { SpotData } from 'src/types/spotData';
import { getSpots } from 'src/hooks/useSpotCardSelect';
import SearchModal from 'src/components/SearchModal';

const Spots: NextPage = () => {
  const [spots, setSpots] = useState<Spot[]>([]);

  const fetchSpot = useCallback(async () => {
    const data = await getSpots();
    setSpots(data || []);
  }, []);

  useEffect(() => {
    fetchSpot();
  }, [fetchSpot]);

  return (
    <UserLayout>
      {/* <SearchModal /> */}
      <div className='flex flex-wrap gap-2 mt-5 sm:pl-24 md:gap-20 2xl:gap-8'>
        {spots.map((spot) => {
          console.log(spot);
          return <SpotCard key={spot.id} spot={spot} />;
        })}
      </div>
      <SpotPagination />
    </UserLayout>
  );
};

export default Spots;
