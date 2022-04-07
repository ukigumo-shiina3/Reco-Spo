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
import { Spinner } from '@chakra-ui/react';
import { SimpleGrid } from '@mantine/core';

const Index: NextPage = () => {
  const [spots, setSpots] = useState<Spot[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false);

  const fetchSpot = async () => {
    try {
      const data = await getSpots();
      setSpots(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSpot().then();
  }, []);
  console.log(spots);

  if (loading) {
    return (
      <div className='flex justify-center mt-64'>
        <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
      </div>
    );
  }
  if (error) {
    return <div>エラーが発生しました。</div>;
  }

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

      <div className='flex justify-center gap-2 mt-5 ml-3 mr-3'>
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
    </UserLayout>
  );
};

export default Index;
