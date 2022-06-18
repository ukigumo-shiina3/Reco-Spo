/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { NextPage } from 'next';
import { UserLayout } from 'src/components/Layout/UserLayout';

const About: NextPage = () => {
  return (
    <UserLayout>
      <div>
        <figure className='relative flex justify-center items-center w-full text-xs sm:text-base'>
          <img
            src='/main-visuals/main-visual0.png'
            alt='サイト概要のメイン画像'
            className='w-full'
          />
          <figcaption className='absolute hidden sm:block bg-indigo-300 opacity-90 p-8 z-index-1'>
            <div className=''>
              <p className='text-white font-bold pt-2 lg:pt-4 lg:text-xl xl:text-2xl'>
                Reco Spoは思い描く理想に合った田舎暮らしを実現したい人と
              </p>
              <p className='text-white font-bold pt-2 lg:pt-4 lg:text-xl xl:text-2xl'>
                居住支援制度を公表し居住者を増やしたい自治体を結びつける
              </p>
              <p className='text-white font-bold pt-2 lg:pt-4 lg:text-xl xl:text-2xl'>
                プラットフォームです。
              </p>
            </div>
          </figcaption>
        </figure>
      </div>
    </UserLayout>
  );
};

export default About;
