import type { NextPage } from 'next';
import { AboutIntroduction } from 'src/components/About/AboutIntroduction';
import { SysyemIntroduction } from 'src/components/System/SysyemIntroduction';
import NextHeadSeo from 'next-head-seo';
import { MyPageSeo } from 'src/components/Seo/MyPageSeo';
import { SpotCard } from 'src/components/Spot/SpotCard';
import { UserLayout } from 'src/components/layout/UserLayout';
import { getSpots } from 'src/hooks/useSpotCardSelect';
import { useCallback, useEffect, useState } from 'react';
import { SpotData } from 'src/types/spotData';

const Index: NextPage = () => {
  const [spots, setSpots] = useState<SpotData[]>([]);

  const fetchSpot = useCallback(async () => {
    const data = await getSpots();
    // console.log(data);
    setSpots(data || []);
  }, []);

  useEffect(() => {
    fetchSpot();
  }, []);
  console.log(spots);

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

      {spots.map((spot) => {
        return <SpotCard key={spot.id} spot={spot} />;
      })}
    </UserLayout>
  );
};

export default Index;
