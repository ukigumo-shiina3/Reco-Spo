import type { NextPage } from 'next';
import { AboutIntroduction } from 'src/components/About/AboutIntroduction';
import { SysyemIntroduction } from 'src/components/System/SysyemIntroduction';
import NextHeadSeo from 'next-head-seo';
import { MyPageSeo } from 'src/components/Seo/MyPageSeo';
import { SpotCard } from 'src/components/Spot/SpotCard';
import { UserLayout } from 'src/components/layout/UserLayout';
import { getSpots } from 'src/hooks/useSpotCardSelect';
import { useCallback, useEffect, useState } from 'react';
import { supabase } from 'src/libs/supabase';

type spotData = {
  admin_id: string;
  name: string;
  title: string;
  area: string;
};

const Index: NextPage = () => {
  // const user = supabase.auth.user();

  // const [admin_id, setAdminId] = useState<string>('');
  const [admin_id, setAdminId] = useState<spotData[]>([]);
  const [name, setName] = useState<spotData[]>([]);
  const [title, setTitle] = useState<spotData[]>([]);
  const [area, setArea] = useState<spotData[]>([]);

  const fetchSpot = useCallback(async () => {
    const data: string[] | undefined = await getSpots();
    console.log(data);

    setAdminId(data || []);
    // console.log(admin_id);
    setName(data || []);
    // setName(data.name);
    setTitle(data || []);
    setArea(data || []);
  }, [admin_id, name, title, area]);

  // let data: spotData = {
  //   admin_id: admin_id,
  //   name: '',
  //   title: '',
  //   area: '',
  // };

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

      <SpotCard admin_id={'1'} name={'穴水町'} title={'お試し暮らし'} area={'石川県'} />
      {/* <SpotCard admin_id={admin_id} name={name} title={title} area={area} /> */}

      {/* {console.log(admin_id)} */}
    </UserLayout>
  );
};

export default Index;
