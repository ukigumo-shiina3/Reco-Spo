import React, { useCallback, useEffect, useState, VFC } from 'react';
import { Box, Flex, Image, Badge, useColorModeValue } from '@chakra-ui/react';
import { PrefectureButton } from 'src/components/Category/PrefectureButton';
import { SystemButton } from 'src/components/Category/SystemButton';
import { SpotData } from 'src/types/spotData';
import { getCategory } from 'src/hooks/useCategorySelect';

type SpotCardProps = {
  spot: SpotData;
};

export const SpotCard: VFC<SpotCardProps> = (props) => {
  const [category, setCategory] = useState();
  // console.log(category);

  const fetchCategory = useCallback(async () => {
    const data = await getCategory();
    // console.log(data);
    setCategory(data || []);
  }, []);

  useEffect(() => {
    fetchCategory();
  }, []);
  // console.log(category);

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
            {category ? <PrefectureButton category={category} /> : ''}
            {category ? <SystemButton category={category} /> : ''}
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
