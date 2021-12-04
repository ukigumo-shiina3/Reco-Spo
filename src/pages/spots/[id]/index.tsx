import Image from 'next/image';
import { NextPage } from 'next';
import { SpotCarousel } from 'src/components/Spot/SpotCarousel/indexl';
import { SpotShow } from 'src/components/Spot/SpotShow';
import { UserLayout } from 'src/components/layout/UserLayout';

const SpotsId: NextPage = () => {
  return (
    <UserLayout>
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
      <div className='sm:px-16 sm:py-8'>
        <SpotCarousel />
        <SpotShow />
      </div>
    </UserLayout>
  );
};

export default SpotsId;
