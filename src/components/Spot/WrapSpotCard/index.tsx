import { SpotCard } from 'src/components/Spot/SpotCard';
import { SetStateAction, useCallback, useEffect, useState } from 'react';
import { getSpots } from 'src/hooks/useSpotCardSelect';
import { Spot } from 'src/types/spot';
import { SimpleGrid } from '@mantine/core';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { searchValue } from 'src/recoil/atom';

export const WrapSpotCard = () => {
  // Recoilからスポットで使う検索ワードを取得する
  const searchWords = useRecoilValue(searchValue);
  //  spotsデータを取得するstate
  const [spots, setSpots] = useState<Spot[]>([]);

  //  searchValueの値を使ってスポットを取得する
  const fetchSpot = useCallback(async () => {
    const data = (await getSpots(searchWords)) as SetStateAction<Spot[]>;
    console.log(data);
    setSpots(data);
  }, [searchWords]);

  // 全spotdata取得/リセットボタン
  const resetSpots = useCallback(async () => {
    const data = (await getSpots()) as SetStateAction<Spot[]>;
    setSpots(data);
  }, []);

  // 初期表示時にfetchSpotを実行
  useEffect(() => {
    fetchSpot();
  }, [fetchSpot]);

  return (
    //  SpotCardコンポーネントの余白についてはこのコンポーネントを外から下記のように囲んでサイジングして上げるとわかりやすい
    // 　mtで上との余白　ml・mrで左右の余白
    //   <div className='flex justify-center  mt-8 ml-3 mr-3'>
    //     <WrapSpotCard />
    //   </div>
    //  tailwindcss基準　sm:640px md:768px lg:1024px xl:1280px
    <>
      <SimpleGrid
        cols={3} // カラム数
        spacing='xl' // スペース xs sm md lg xl
        breakpoints={[
          { maxWidth: 1280, cols: 2, spacing: 'xl' },
          { maxWidth: 768, cols: 1, spacing: 'xl' },
        ]} // ブレークポイント
      >
        {spots.map((spot) => {
          // console.log(spot);
          return <SpotCard key={spot.id} spot={spot} />;
        })}
      </SimpleGrid>
    </>
  );
};
