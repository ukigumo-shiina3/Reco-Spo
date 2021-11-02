import React from 'react';
import { Box, Flex, Image, Badge, useColorModeValue } from '@chakra-ui/react';
import { PrefectureButton } from 'src/components/Category/PrefectureButton';
import { SystemButton } from 'src/components/Category/SystemButton';

export const SpotCard: React.VFC = () => {
  const property = {
    imageUrl: 'spot-pic.jpeg',
    imageAlt: '石川県穴水町',
    spotName: '石川県穴水町',
    title: '自然豊かな穴水町での生活を体験してみませんか？',
    adminName: '穴水町役場',
    heart: '12',
  };

  return (
    <Flex
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      p={50}
      w='full'
      alignItems='center'
      justifyContent='center'
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
            <PrefectureButton />
            <SystemButton />
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
                <div className='mt-1 ml-1'> {property.spotName}</div>
              </div>
            </Box>
          </Box>

          <Box mt='10' mb='5' as='h4' fontSize='lg' lineHeight='tight'>
            <div className='text-md'>{property.title}</div>
          </Box>

          <Box>
            <div className='flex justify-between mb-2 mr-2'>
              <div className='flex'>
                <Image
                  borderRadius='full'
                  boxSize='50px'
                  src='/admin-test-pic.jpg'
                  alt='穴水町役場'
                />
                <div className='ml-2 mt-4'>{property.adminName}</div>
              </div>
              <Box as='span' color='black.600' fontSize='md'></Box>
              <div className='flex text-right mt-3'>
                <div className='mt-1'>
                  <Image src='/heart-line.png' width={5} height={5} alt='ハートアイコン' />
                </div>
                {/* <i className='ri-heart-line'></i> */}
                <div className='text-lg ml-1'>{property.heart}</div>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
