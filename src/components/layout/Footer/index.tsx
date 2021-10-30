import Link from 'next/link';

export const Footer: React.VFC = () => {
  return (
    <div className='text-center block justify-between  bg-gray-200 md:flex  '>
      <div className='text-xs p-4 md:text-sm md:p-7'>
        Copyright © 2021 Reco Spo. All rights reserved{' '}
      </div>
      <div className='md:p-6'>
        <Link href='/terms' passHref>
          <a className='text-xs pr-6 md:text-sm md:p-6'>利用規約</a>
        </Link>
        <Link href='/policy' passHref>
          <a className='text-xs md:text-sm md:p-6'>プライバシーポリシー</a>
        </Link>
      </div>
    </div>
  );
};
