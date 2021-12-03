import Image from 'next/image';
import { NextPage } from 'next';
import { Footer } from 'src/components/layout/Footer';
import { Header } from 'src/components/layout/Header';
import { SpotCarousel } from 'src/components/Spot/SpotCarousel/indexl';
import { SpotShow } from 'src/components/Spot/SpotShow';

const SpotsId: NextPage = () => {
  return (
    <div>
      <Header />
      <div className='w-screen block '>
        <Image
          src='/about-pic.png'
          quality={100}
          width={2000}
          height={700}
          objectFit='contain'
          layout='responsive'
          alt='サイト概要のメイン画像'
        />
      </div>
      <div className='px-16 py-8'>
        <SpotCarousel />
        <SpotShow />
      </div>
      <Footer />
    </div>
  );
};

export default SpotsId;
