/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import type { VFC } from 'react';

export const AboutIntroduction: VFC = () => {
  return (
    <div>
      <figure className='relative w-full text-xs  sm:text-base '>
        <img src='/main-visual1.png' alt='サイト概要のメイン画像' className='w-full' />
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
      {/* Reco Spoとは */}
      <div className='container mx-auto max-w-[1080px]'>
        <h1 className='flex justify-center text-2xl my-10 sm:my-14 sm:text-4xl'>Reco Spoとは</h1>
        <div className='text-sm sm:text-xl sm:pl-24'>
          <p className='mb-4 px-10'>
            将来的に田舎暮らしに憧れを持っているが、日本各地それぞれの土地の魅力は様々。
          </p>
          <p className='mb-4 px-10'>実際その土地に住むメリットや魅力は何があるのだろうか？</p>
          <p className='mb-4 px-10'>
            Reco Spoでは、自治体ごとに発信されている住宅支援やお試し移住体験といった制度を
            見比べることで自分にあったスポットを見つけることができます。
          </p>
          <p className='mb-4 px-10'>
            また、町の魅力的な制度を発信したい自治体は登録をすることでスポットの投稿を行うことができます。
          </p>
          <p className='mb-4 px-10'>
            Reco
            Spoは田舎暮らしをしてみたい人と、支援制度を利用して町に住んで欲しいという自治体の願いを結びつけるサイトです。
          </p>
        </div>
        <div className='flex justify-center my-10 sm:my-14'>
          <Link href='/admins/signup' passHref>
            <button className=' bg-red-400 hover:bg-pink-700 text-white text-xs font-bold p-4 rounded sm:text-xl sm:p-5'>
              自治体の登録はこちらをクリック
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
