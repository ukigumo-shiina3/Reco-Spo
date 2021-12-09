import Image from 'next/image';
import type { VFC } from 'react';

export const SpotShow: VFC = () => {
  return (
    <div>
      <div className='w-screen sm:p-5 sm:px-10 py-5'>
        <Image
          src='/spot-show-heading1.png'
          quality={100}
          width={180}
          height={50}
          alt='アピールポイント'
        />
        <p className='mb-2 text-sm md:text-lg '>
          世界農業遺産「能登の里山里海」に位置する石川県穴水町は美しい山と海に恵まれ、
        </p>
        <p className='mb-2 text-sm md:text-lg'>穏やかな時間が流れています。</p>
        <p className='mb-2 text-sm md:text-lg'>
          そんな穴水町の暮らしぶりを気軽に体験して頂けるように「短期移住体験住宅」をご用意いたしました。
        </p>
        <p className='mb-2 text-sm md:text-lg'>
          空港や駅へのアクセスも良く、暮らしやすい場所で移住体験ができます。
        </p>
        <p className='mb-2 text-sm md:text-lg'>
          田舎への移住をお考えの方はこの機会にぜひご利用下さい。
        </p>
      </div>

      <img
        src='/map-pic.png'
        alt='地図の画像'
        className='m-auto w-full h-80 p-8 my-12 sm:h-96 sm:object-fill xl:h-full'
      />

      <div className='flex'>
        <div className='p-5 sm:px-10 py-5'>
          <Image
            src='/spot-show-heading2.png'
            quality={100}
            width={180}
            height={50}
            alt='スポット詳細'
          />
          <p className='mb-2 text-sm md:text-lg'>住所：穴水町字岩車11-19-38[位置図]</p>
          <p className='mb-2 text-sm md:text-lg'>物件：詳細はこちら</p>
          <p className='mb-2 mt-8 text-sm md:text-lg'>◇対象者：町外から当町への移住を希望する者</p>
          <p className='mb-2 text-sm md:text-lg'>◇利用料：無料</p>
          <p className='mb-2 text-sm md:text-lg'>◇期間：最長７泊８日</p>
        </div>
        <div className='p-5 sm:px-10 py-5'>
          <Image
            src='/spot-show-heading3.png'
            quality={100}
            width={180}
            height={50}
            alt='お問い合わせ先'
          />
          <p className='mb-2 text-sm md:text-lg'>お問合せはこちらまで</p>
          <p className='mb-2 text-sm md:text-lg'>〒927-8601石川県鳳珠郡穴水町字川島ラの174番地</p>
          <p className='mb-2 text-sm md:text-lg'>穴水町観光交流課</p>
          <p className='mb-2 text-sm md:text-lg'>TEL:0768-52-3671 FAX:0768-52-2079</p>
          <p className='mb-2 text-sm md:text-lg'>E-mail:kouryu3@sec.town.anamizu.ishikawa.jp</p>
        </div>
      </div>
    </div>
  );
};
