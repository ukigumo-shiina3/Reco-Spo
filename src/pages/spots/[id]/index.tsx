import Image from 'next/image';
import { NextPage } from 'next';
import { SpotCarousel } from 'src/components/Carousel/SpotCarousel';
import { SpotShow } from 'src/components/Spot/SpotShow';
import { UserLayout } from 'src/components/Layout/UserLayout';
import { useCallback, useEffect, useState } from 'react';
import { getSpotsId } from 'src/hooks/useSpotIdSelect';
import { useRouter } from 'next/router';
import { Spot } from 'src/types/spot';
import { Container } from '@mantine/core';

const SpotsId: NextPage = () => {
  const router = useRouter();
  const [spot, setSpot] = useState<Spot>();
  const [id, setId] = useState<string>('');

  const fetchSpot = useCallback(async (id: string) => {
    const data = await getSpotsId(id);
    setSpot(data);
    console.log(data);
  }, []);

  useEffect(() => {
    if (router.asPath !== router.route) {
      setId(String(router.query.id));
    }
    // console.log(router.query.id);
  }, [router]);

  useEffect(() => {
    if (id) {
      fetchSpot(router.query.id as string);
    }
    // console.log(router.query.id);
  }, [id, fetchSpot, router.query.id]);

  return (
    <UserLayout>
      <div className='box-content'>
        <div className='w-screen block mb-8'>
          <Image
            src='/main-visuals/main-visual5.png'
            quality={100}
            width={2000}
            height={700}
            objectFit='contain'
            layout='responsive'
            alt='サイト概要のメイン画像'
          />
        </div>
        <Container>
          {spot ? (
            <div>
              <SpotCarousel spot={spot} />
              <SpotShow spot={spot} />
            </div>
          ) : null}
        </Container>
      </div>
    </UserLayout>
  );
};

export default SpotsId;
