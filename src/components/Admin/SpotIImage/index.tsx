import type { VFC } from 'react';

export const SpotImage: VFC = () => {
  return (
    <div>
      <h1 className='text-3xl mt-24'>スポット投稿</h1>
      <h2 className='flex mt-5'>
        スポット画像<p className=''>(最大5枚)</p>
      </h2>
      <div className='flex flex-wrap gap-3 mt-5'>
        <div className='bg-white w-12 h-12'>
          <img src='/camera-icon.png' alt='カメラアイコン' className='m-auto mt-2 w-8 h-8' />
        </div>
        <div className='bg-white w-12 h-12'>
          <img src='/camera-icon.png' alt='カメラアイコン' className='m-auto mt-2 w-8 h-8' />
        </div>
        <div className='bg-white w-12 h-12'>
          <img src='/camera-icon.png' alt='カメラアイコン' className='m-auto mt-2 w-8 h-8' />
        </div>
        <div className='bg-white w-12 h-12'>
          <img src='/camera-icon.png' alt='カメラアイコン' className='m-auto mt-2 w-8 h-8' />
        </div>
        <div className='bg-white w-12 h-12'>
          <img src='/camera-icon.png' alt='カメラアイコン' className='m-auto mt-2 w-8 h-8' />
        </div>
      </div>
      <div className='mt-5'>
        <img
          src='/image-upload.png'
          alt='画像アップロードアイコン'
          className='w-hull h-12 sm:h-24'
        />
      </div>
    </div>
  );
};
