import Image from 'next/image';

export const AboutIntroduction: React.VFC = () => {
  return (
    <div>
      <div className='w-screen block '>
        <Image
          src='/top-pic.png'
          quality={100}
          width={2000}
          height={700}
          objectFit='contain'
          layout='responsive'
          alt='サイト概要のメイン画像'
        />
      </div>

      {/* Reco Spoとは */}
      <div className='container mx-auto'>
        <h1 className='flex justify-center text-2xl my-10'>Reco Spoとは</h1>
        <p className='mb-4 px-10 text-sm'>
          将来的に田舎暮らしに憧れを持っているが、日本各地それぞれの土地の魅力は様々。
        </p>
        <p className='mb-4 px-10 text-sm'>実際その土地に住むメリットや魅力は何があるのだろうか？</p>
        <p className='mb-4 px-10 text-sm'>
          Reco Spoでは、自治体ごとに発信されている住宅支援やお試し移住体験といった制度を
          見比べることで自分にあったスポットを見つけることができます。
        </p>
        <p className='mb-4 px-10 text-sm'>
          また、町の魅力的な制度を発信したい自治体は登録をすることでスポットの投稿を行うことができます。
        </p>
        <p className='mb-4 px-10 text-sm'>
          Reco
          Spoは田舎暮らしをしてみたい人と、支援制度を利用して町に住んで欲しいという自治体の願いを結びつけるサイトです。
        </p>
        <div className='flex justify-center my-10'>
          <button className=' bg-red-400 hover:bg-pink-700 text-white text-xs font-bold py-3 px-3 rounded '>
            自治体の登録はこちらをクリック
          </button>
        </div>
      </div>
    </div>
  );
};
