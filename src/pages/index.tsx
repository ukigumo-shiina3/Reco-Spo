import type { NextPage } from 'next';
import { AboutIntroduction } from 'src/components/About/AboutIntroduction';
import { SysyemIntroduction } from 'src/components/System/SysyemIntroduction';
import NextHeadSeo from 'next-head-seo';
import { MyPageSeo } from 'src/components/Seo/MyPageSeo';
import { SpotCard } from 'src/components/Spot/SpotCard';
import { UserLayout } from 'src/components/layout/UserLayout';
import { getSpots } from 'src/hooks/useSpotCardSelect';
import { useCallback, useEffect, useState } from 'react';
import { Spot } from 'src/types/spot';

type spotData = {
  spot: Array<spotData>;
};

const Index: NextPage = () => {
  const [spot, setSpot] = useState<spotData[]>([]);
  // const [spot, setSpot] = useState<spotData>();

  const fetchSpot = useCallback(async () => {
    const data: string[] | undefined = await getSpots();
    // console.log(data);
    setSpot(data || []);
  }, []);

  useEffect(() => {
    fetchSpot();
  }, [fetchSpot]);

  return (
    <UserLayout>
      <NextHeadSeo
        title='Reco Spo'
        og={{
          title: 'Reco Spo',
        }}
      />
      <MyPageSeo
        path='/'
        title='トップページ'
        description='Reco Spoでは、自治体ごとに発信されている住宅支援やお試し移住体験といった制度を見比べることで自分にあったスポットを見つけることができます。'
        noindex={true}
      />
      <AboutIntroduction />
      <SysyemIntroduction />

      {/* <SpotCard admin_id={'1'} name={'穴水町'} title={'お試し暮らし'} area={'石川県'} /> */}
      <SpotCard spot={spot} />

      {/* {console.log(spot)} */}
    </UserLayout>
  );
};

export default Index;
