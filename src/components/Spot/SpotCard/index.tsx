/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useEffect, useState, VFC } from 'react';
import { Box, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import { Spot } from 'src/types/spot';
import Link from 'next/link';
import { supabase } from 'src/libs/supabase';
import { Like } from 'src/types/like';
import { getLikeId } from 'src/hooks/useLikeSelect';
import { useRouter } from 'next/router';

export type SpotCardProps = {
  spot: Spot;
};

export const SpotCard: VFC<SpotCardProps> = (props) => {
  const router = useRouter();

  const [getLike, setGetLike] = useState<Like>({ id: '', user_id: '', spot_id: '' });
  const [likeStatus, setLikeStatus] = useState<boolean>(false);
  const [id, setId] = useState<string>();

  const property = {
    imageUrl: 'spot-pic.jpeg',
    imageAlt: 'props.image_url',
  };

  const fetchLikeId = useCallback(async (id: string) => {
    const data = await getLikeId(id);
    setGetLike(data);
  }, []);

  useEffect(() => {
    if (router.asPath !== router.route) {
      setId(String(router.query.id));
    }
    // console.log(router.query.id);
  }, [router]);

  useEffect(() => {
    if (id) {
      fetchLikeId(router.query.id as string);
    }
    // console.log(router.query.id);
  }, [id, fetchLikeId, router.query.id]);

  const handleGetLike = useCallback(async () => {
    const { data, error } = await supabase.from('likes').insert({
      id: getLike.id,
      user_id: getLike.user_id,
      spot_id: getLike.spot_id,
    });
    console.log({ data, error });
  }, [getLike]);

  const handleRemoveLike = useCallback(async () => {
    const { data, error } = await supabase.from('likes').delete().match({ id: getLike.id });
    console.log({ data, error });
  }, [getLike]);

  return (
    <Flex
      bg={useColorModeValue('#FFF', 'white')}
      p={50}
      w={500}
      alignItems='right'
      justifyContent='right'
      flexWrap='wrap'
    >
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW='sm'
        borderWidth='1px'
        rounded='lg'
        shadow='lg'
      >
        <div className='relative text-center text-xs md:w-30 h-50'>
          <Link href={`/spots/${props.spot.id}`} key={props.spot.id}>
            <a>
              <Image src={property.imageUrl} alt={property.imageAlt} roundedTop='lg' />
              <div className='absolute flex flex-col text-white text-center top-0 left-0 '>
                <button className='bg-red-400 text-white text-xs font-bold py-2 px-5 rounded '>
                  {props.spot.prefectures.prefectures_name}
                </button>
                <button className='bg-yellow-400 text-white text-xs font-bold py-2 px-5 rounded '>
                  {props.spot.systems.systems_name}
                </button>
              </div>
            </a>
          </Link>
        </div>

        <Box p='6' mt='3'>
          <Box d='flex'>
            <Box
              color='blsck.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='md'
              textTransform='uppercase'
              ml='2'
            >
              <div className='flex mb-2 mr-2'>
                <Link href={`/spots/${props.spot.id}`} key={props.spot.id}>
                  <a className='flex'>
                    <Image src='/map-marker-icon.png' alt='地図マーカーアイコン' />
                    <div className='mt-1 ml-1'> {props.spot.name}</div>
                  </a>
                </Link>
              </div>
            </Box>
          </Box>

          <Box mt='10' mb='5' as='h4' fontSize='lg' lineHeight='tight'>
            <div className='text-md mb-10 truncate'>
              <Link href={`/spots/${props.spot.id}`} key={props.spot.id}>
                <a>{props.spot.title} </a>
              </Link>
            </div>
          </Box>
          <Box>
            <div className='flex justify-between mb-2 mr-2'>
              <div className='flex'>
                <Link href={`/spots/${props.spot.id}`} key={props.spot.id}>
                  <a className='flex'>
                    <Image
                      borderRadius='full'
                      boxSize='50px'
                      src='/admin-test-pic.jpg'
                      alt='props.image_url'
                    />
                    <div className='ml-4 mt-4'>{props.spot.area}</div>
                  </a>
                </Link>
              </div>
              <Box as='span' color='black.600' fontSize='md'></Box>
              <div className='flex text-right mt-3'>
                <div className='mt-1'>
                  <button onClick={() => setLikeStatus(!likeStatus)}>
                    {likeStatus ? (
                      <button onClick={handleGetLike}>
                        <div>
                          <input
                            type='hidden'
                            value={[getLike.id, getLike.spot_id, getLike.user_id]}
                            onChange={(e) => {
                              setGetLike({ ...getLike, id: e.target.value.trim() });
                              setGetLike({ ...getLike, spot_id: e.target.value.trim() });
                              setGetLike({ ...getLike, user_id: e.target.value.trim() });
                            }}
                          />
                          <Image src='/unlike.png' width={5} height={5} alt='ハートアイコン' />
                        </div>
                      </button>
                    ) : (
                      <button onClick={handleRemoveLike}>
                        <div>
                          <input
                            type='hidden'
                            value={[getLike.id, getLike.spot_id, getLike.user_id]}
                            onChange={(e) => {
                              setGetLike({ ...getLike, id: e.target.value.trim() });
                              setGetLike({ ...getLike, spot_id: e.target.value.trim() });
                              setGetLike({ ...getLike, user_id: e.target.value.trim() });
                            }}
                          />
                          <Image src='/like.png' width={5} height={5} alt='ハートアイコン' />
                        </div>
                      </button>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
