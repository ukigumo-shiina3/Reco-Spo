import { SpotCard } from 'src/components/Spot/SpotCard';
import { useCallback, useEffect, useState } from 'react';
import { getSpots } from 'src/hooks/useSpotCardSelect';
import { Spot } from 'src/types/spot';
import { SimpleGrid } from '@mantine/core';

export const WrapSpotCard = () => {
  const [spots, setSpots] = useState<Spot[]>([]);

  const fetchSpot = useCallback(async () => {
    const data = await getSpots();
    setSpots(data || []);
  }, []);

  useEffect(() => {
    fetchSpot();
  }, [fetchSpot]);

  return (
    //  SpotCardコンポーネントの余白についてはこのコンポーネントを外から下記のように囲んでサイジングして上げるとわかりやすい
    // 　mtで上との余白　ml・mrで左右の余白
    //   <div className='flex justify-center  mt-8 ml-3 mr-3'>
    //     <WrapSpotCard />
    //   </div>
    <SimpleGrid
      cols={3} // カラム数
      spacing='xl' // スペース xs sm md lg xl
      breakpoints={[
        // { maxWidth: 980, cols: 3, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'xl' },
        { maxWidth: 600, cols: 1, spacing: 'xl' },
      ]} // ブレークポイント
    >
      {spots.map((spot) => {
        console.log(spot);
        return <SpotCard key={spot.id} spot={spot} />;
      })}
    </SimpleGrid>
  );
};
