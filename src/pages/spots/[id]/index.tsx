import Image from 'next/image';
import { NextPage } from 'next';
import { SpotCarousel } from 'src/components/Spot/SpotCarousel/indexl';
import { SpotShow } from 'src/components/Spot/SpotShow';
import { UserLayout } from 'src/components/Layout/UserLayout';
import { useEffect, useState } from 'react';
import { Spot } from 'src/types/spot';
import { getSpots } from 'src/hooks/useSpotCardSelect';

type SpotCardProps = {
  spot: Spot;
};

const SpotsId: NextPage<SpotCardProps> = () => {
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
        <SpotShow spots={spots} />
      </div>
    </UserLayout>
  );
};

export default SpotsId;
