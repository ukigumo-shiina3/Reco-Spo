/* eslint-disable @next/next/no-img-element */
import { Flex, useColorModeValue } from '@chakra-ui/react';
import { VFC } from 'react';

export const SearchButton: VFC = () => {
  return (
    <Flex
      bg={useColorModeValue('#FFF', 'white')}
      p={10}
      w='full'
      alignItems='right'
      justifyContent='right'
    >
      <div className='flex'>
        <button className='flex text-sm pl-2 pr-4 py-3 bg-white border-gray-400 border-2 rounded-3xl'>
          <img
            src='/icon/search-icon.png'
            alt='スポット検索アイコン'
            className='mx-2 h-4 w-4 mt-0.5'
          />
          絞り込む
        </button>
      </div>
    </Flex>
  );
};
