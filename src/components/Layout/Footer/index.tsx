import Link from 'next/link';
import type { VFC } from 'react';

export const Footer: VFC = () => {
  return (
    <div className='bg-gray-200 max-h-[76px]'>
      <div className='container justify-center mx-auto  max-w-[1080px]'>
        <div className='text-center justify-between  bg-gray-200 md:flex  '>
          <div className='text-xs p-4 md:text-sm md:p-7'>
            Copyright © 2021 Reco Spo. All rights reserved
          </div>
          <div className='md:p-6'>
            <Link href='/term' passHref>
              <a className='text-xs pr-6 md:text-sm md:p-6'>利用規約</a>
            </Link>
            <Link href='/policy' passHref>
              <a className='text-xs md:text-sm md:p-6'>プライバシーポリシー</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
