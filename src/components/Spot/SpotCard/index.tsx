import React, { VFC } from 'react';
import { Box, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import { Spot } from 'src/types/spot';

type SpotCardProps = {
  spot: Spot;
};

export const SpotCard: VFC<SpotCardProps> = (props) => {
  const property = {
    imageUrl: 'spot-pic.jpeg',
    imageAlt: 'props.image_url',
    heart: '12',
  };

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
        <div className='relative text-center text-xs  md:w-30 h-50'>
          <Image src={property.imageUrl} alt={property.imageAlt} roundedTop='lg' />
          <div className='absolute flex flex-col text-white text-center top-0 left-0 '>
            <button className='bg-red-400 text-white text-xs font-bold py-2 px-5 rounded '>
              {props.spot.prefectures.prefectures_name}
            </button>
            <button className='bg-yellow-400 text-white text-xs font-bold py-2 px-5 rounded '>
              {props.spot.systems.systems_name}
            </button>
          </div>
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
                <Image src='/map-marker-icon.png' alt='地図マーカーアイコン' />
                <div className='mt-1 ml-1'> {props.spot.name}</div>
              </div>
            </Box>
          </Box>
          <Box mt='10' mb='5' as='h4' fontSize='lg' lineHeight='tight'>
            <div className='text-md'>{props.spot.title}</div>
          </Box>
          <Box>
            <div className='flex justify-between mb-2 mr-2'>
              <div className='flex'>
                <Image
                  borderRadius='full'
                  boxSize='50px'
                  src='/admin-test-pic.jpg'
                  alt='props.image_url'
                />
                <div className='ml-2 mt-4'>{props.spot.area}</div>
              </div>
              <Box as='span' color='black.600' fontSize='md'></Box>
              <div className='flex text-right mt-3'>
                <div className='mt-1'>
                  <Image src='/heart-line.png' width={5} height={5} alt='ハートアイコン' />
                </div>
                <div className='text-lg ml-1'>{property.heart}</div>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
