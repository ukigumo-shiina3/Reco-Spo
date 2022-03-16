/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import type { VFC } from 'react';
import { Spot } from 'src/types/spot';

type SpotCardProps = {
  spot: Spot;
};

export const SpotShow: VFC<SpotCardProps> = (props) => {
  return (
    <div>
      <div className='w-screen sm:p-5 sm:px-10 sm:py-5'>
        <Image
          src='/spot-show-heading1.png'
          quality={100}
          width={180}
          height={50}
          alt='アピールポイント'
        />
        <p className='mb-2 text-sm md:text-xl '>{props.spot.appeal}</p>
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
          <div className='text-sm md:text-xl'>
            <p className='mb-2 '>住所：{props.spot.address}</p>
            <p className='mb-2'>物件：詳細はこちら{props.spot.link}</p>
            <p className='mb-2'>対象者：{props.spot.target_person}</p>
            <p className='mb-2'>利用料：{props.spot.usage_fee}</p>
            <p className='mb-2'>期間：{props.spot.term}</p>
          </div>
        </div>

        <div className='sm:pl-4'>
          <div className='p-5 sm:px-10 sm:py-5'>
            <Image
              src='/spot-show-heading3.png'
              quality={100}
              width={180}
              height={50}
              alt='お問い合わせ先'
            />
            <div className='text-sm md:text-xl'>
              <p className='mb-2'>お問合せはこちらまで</p>
              <p className='mb-2'>
                住所： 〒{props.spot.postal_code} {props.spot.address}
              </p>
              <p className='mb-2'>担当名: {props.spot.manager}</p>
              <p className='mb-2'>電話番号: {props.spot.tel}</p>
              <p className='mb-2'>メールアドレス: {props.spot.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
