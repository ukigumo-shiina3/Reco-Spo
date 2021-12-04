import type { NextPage } from 'next';
import { AboutIntroduction } from 'src/components/About/AboutIntroduction';
import { SysyemIntroduction } from 'src/components/System/SysyemIntroduction';
import NextHeadSeo from 'next-head-seo';
import { MyPageSeo } from 'src/components/Seo/MyPageSeo';
import { SpotCard } from 'src/components/Spot/SpotCard';
import { UserLayout } from 'src/components/layout/UserLayout';

const Index: NextPage = () => {
  return (
    <UserLayout>
      <NextHeadSeo
        title='Reco Spo'
        // canonical='https://example.com/hello'
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
      <SpotCard />
    </UserLayout>
  );
};

export default Index;
