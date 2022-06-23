import Link from 'next/link';
import type { VFC } from 'react';
import { toast, Toaster } from 'react-hot-toast';

export const Header: VFC = () => {
  const handleProgress = () => {
    toast('この機能は現在開発中です', {
      position: 'top-center',
      icon: '🚧',
    });
  };

  return (
    <div>
      <div className='flex p-8'>
        <div className=''>
          <Link href='/' passHref>
            <a className='font-fancy font-bold text-2xl sm:text-4xl pt-4 sm:pt-8 pb-10 md:text-5xl'>
              Reco Spo
            </a>
          </Link>
        </div>
        <div className='flex absolute right-8 top-10 '>
          <Link href='/about' passHref>
            <a className='px-1 sm:px-2 pb-6 text-sm md:text-base lg:text-lg '>
              <div className='pl-1 pt-0.5'>About</div>
            </a>
          </Link>
          <Link href='/admins/signin' passHref>
            <a className='px-1 sm:px-2 pb-6 text-sm md:text-base lg:text-lg'>
              <div className='pl-1 pt-0.5'>自治体登録</div>
            </a>
          </Link>
          {/* <Link href='/map' passHref> */}
          <a className='px-1 sm:px-2 pb-10 text-sm md:text-base lg:text-lg'>
            <button onClick={handleProgress} className='pl-1 pt-0.5'>
              マップ検索
            </button>
          </a>
          {/* </Link> */}
        </div>
      </div>
      <Toaster />
    </div>
  );
};
