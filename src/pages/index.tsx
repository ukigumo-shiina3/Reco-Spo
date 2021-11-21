import type { NextPage } from 'next';
import { Header } from 'src/components/layout/Header';
import { Footer } from 'src/components/layout/Footer';
import { AboutIntroduction } from 'src/components/About/AboutIntroduction';
import { SysyemIntroduction } from 'src/components/System/SysyemIntroduction';
import { SpotCard } from 'src/components/Spot/SpotCard/SpotCard';
import NextHeadSeo from 'next-head-seo';
import { MyPageSeo } from 'src/components/Seo/MyPageSeo';

const Index: NextPage = () => {
  return (
    <div>
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
      <Header />
      <AboutIntroduction />
      <SysyemIntroduction />
      <SpotCard />
      <Footer />
    </div>
  );
};

export default Index;
