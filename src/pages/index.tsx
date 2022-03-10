import type { NextPage } from 'next';
import { AboutIntroduction } from 'src/components/About/AboutIntroduction';
import { SysyemIntroduction } from 'src/components/System/SysyemIntroduction';
import NextHeadSeo from 'next-head-seo';
import { MyPageSeo } from 'src/components/Seo/MyPageSeo';
import { SpotCard } from 'src/components/Spot/SpotCard';
import { UserLayout } from 'src/components/Layout/UserLayout';
import { getSpots } from 'src/hooks/useSpotCardSelect';
import { useEffect, useState } from 'react';
import { Spot } from 'src/types/spot';
import Link from 'next/link';

const Index: NextPage = () => {
  const [spots, setSpots] = useState<Spot[]>([]);

  const fetchSpot = async () => {
    const data = await getSpots();
    setSpots(data || []);
  };

  useEffect(() => {
    fetchSpot().then();
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

      <div className='flex flex-wrap gap-2 mt-5 sm:pl-24 md:gap-20 2xl:gap-8'>
        {spots.map((spot) => {
          return (
            <Link href={`/spots/${spot.id}`} key={spot.id} passHref>
              <a>
                <SpotCard spot={spot} />
              </a>
            </Link>
          );
        })}
      </div>
    </UserLayout>
  );
};

export default Index;
