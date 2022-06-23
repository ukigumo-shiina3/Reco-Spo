/* eslint-disable @next/next/no-img-element */
import React from 'react';
import type { VFC } from 'react';

export const AboutIntroduction: VFC = () => {
  return (
    <div>
      <figure className='relative w-full text-xs  sm:text-base '>
        <img src='/main-visuals/main-visual1.png' alt='サイト概要のメイン画像' className='w-full' />
        <figcaption className='absolute text-white bottom-2 right-1 z-index-1 sm:bottom-4 sm:right-2 md:bottom-8 lg:bottom-12 lg:right-8 2xl:bottom-20'>
          <div className='hidden sm:block'>
            <p className='font-black text-md sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl '>
              あなたの暮らしはここから始まる
            </p>
            <p className='font-bold pt-2 lg:pt-4 lg:text-xl xl:text-2xl '>
              自治体ごとに公表された住宅支援やお試し移住体験から
            </p>
            <p className='font-bold pt-2 lg:pt-4 lg:text-xl xl:text-2xl '>
              条件にあった町を覗いてみませんか？
            </p>
            <p className='font-bold pt-2 lg:pt-4 lg:text-xl xl:text-2xl '>
              あなたにあった居場所がきっと見つかるはずです
            </p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};
