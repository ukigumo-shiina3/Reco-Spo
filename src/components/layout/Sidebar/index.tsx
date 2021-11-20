import Image from 'next/image';
import Link from 'next/link';
import { supabase } from 'src/libs/supabase';

const HandleLogout = () => {
  supabase.auth.signOut();
};

export const Sidebar: React.VFC = () => {
  return (
    <div>
      <div className='flex-1 w-28 h-full text-center bg-blue-300 md:w-56 '>
        <div className='bg-blue-400 py-10'>
          <a className='font-fancy font-bold text-white text-xl md:text-4xl'>Reco Spo</a>
        </div>
        <div className='py-8 px-1 sm:flex justify-center '>
          <Image
            src='/spot-pic.jpeg'
            alt='admin_image'
            height={70}
            width={70}
            className='rounded-full'
          />
          <div className='text-white p-3'>
            <p className='text-xs pb-2 md:text-sm'>ようこそ</p>
            <p className='text-xs pb-2 md:text-sm'>穴水役場さん</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <Link href='/admins/' passHref>
            <a className='text-xs text-center text-white  hover:bg-blue-400 py-8 lg:text-sm '>
              プロフィール編集
            </a>
          </Link>
          <Link href='/admins/spots/post' passHref>
            <a className='text-xs text-center text-white  hover:bg-blue-400 py-8 lg:text-sm '>
              スポット投稿
            </a>
          </Link>
          {/* <Link href={`/${spots.id}`} passHref> */}
          <a className='text-xs text-center text-white  hover:bg-blue-400 py-8 lg:text-sm '>
            スポット編集
          </a>
          {/* </Link> */}
          <a className='text-xs text-center text-white  hover:bg-blue-400 py-8 lg:text-sm '>
            <button onClick={HandleLogout}>ログアウト</button>
          </a>
        </div>
      </div>
    </div>
  );
};
