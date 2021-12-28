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
// import { supabase } from 'src/libs/supabase';

const Index: NextPage<Pick<Spot, 'id' | 'name' | 'title' | 'area'>> = () => {
  // const user = supabase.auth.user();

  const [name, setName] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [area, setArea] = useState<string>('');

  const fetchSpot = useCallback(async () => {
    const data = await getSpots();
    console.log(data);
    setName(name);
    setTitle(title);
    setArea(area);
  }, [name, title, area]);

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

      <SpotCard id={'1'} name={'穴水町'} title={title} area={area} />
    </UserLayout>
  );
};

export default Index;
