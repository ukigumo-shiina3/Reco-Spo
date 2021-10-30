import Image from 'next/image';
import Link from 'next/link';

export const Header: React.VFC = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <Link href='/' passHref>
          <a className='font-fancy font-bold text-4xl py-10 mt-8 md:text-5xl'>Reco Spo</a>
        </Link>
      </div>
      <div className='flex flex-wrap justify-center md:flex'>
        <Link href='/about' passHref>
          <a className='px-2 pb-6 text-sm '>
            <div className='flex'>
              <Image src='/about-icon.png' width={24} height={24} alt='サイト概要アイコン' />
              <div className='pl-1 pt-0.5'>サイト概要</div>
            </div>
          </a>
        </Link>
        <Link href='/system' passHref>
          <a className='px-2 pb-6 text-sm'>
            <div className='flex'>
              <Image src='/system-icon.png' width={24} height={24} alt='制度概要アイコン' />
              <div className='pl-1 pt-0.5'>制度概要</div>
            </div>
          </a>
        </Link>
        <Link href='/spots' passHref>
          <a className='px-2 pb-6 text-sm'>
            <div className='flex'>
              <Image src='/spot-icon.png' width={24} height={24} alt='スポット一覧アイコン' />
              <div className='pl-1 pt-0.5'>スポット一覧</div>
            </div>
          </a>
        </Link>
        <Link href='/admin/signin' passHref>
          <a className='px-2 pb-6 text-sm'>
            <div className='flex'>
              <Image src='/admin-icon.png' width={24} height={24} alt='自治体登録アイコン' />
              <div className='pl-1 pt-0.5'>自治体登録</div>
            </div>
          </a>
        </Link>
        <Link href='/map' passHref>
          <a className='px-2 pb-6 text-sm'>
            <div className='flex'>
              <Image src='/map-icon.png' width={24} height={24} alt='マップ検索アイコン' />
              <div className='pl-1 pt-0.5'>マップ検索</div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};
