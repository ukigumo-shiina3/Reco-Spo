import type { NextPage } from 'next';
import { AboutIntroduction } from 'src/components/About/AboutIntroduction';
import { SystemIntroduction } from 'src/components/System/SystemIntroduction';
import NextHeadSeo from 'next-head-seo';
import { MyPageSeo } from 'src/components/Seo/MyPageSeo';
import { UserLayout } from 'src/components/Layout/UserLayout';
import { getSpots } from 'src/hooks/useSpotCardSelect';
import { useEffect, useState } from 'react';
import { Spot } from 'src/types/spot';
import { Spinner } from '@chakra-ui/react';
import { WrapSpotCard } from 'src/components/Spot/WrapSpotCard';

const Index: NextPage = () => {
  const [spots, setSpots] = useState<Spot[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false);

  const fetchSpot = async () => {
    try {
      const data = await getSpots();
      if (!data) return;
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
      <SystemIntroduction />
      <div className='flex justify-center  my-20 ml-3 mr-3'>
        <WrapSpotCard />
      </div>
    </UserLayout>
  );
};

export default Index;
