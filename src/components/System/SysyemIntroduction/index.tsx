import type { VFC } from 'react';

export const SysyemIntroduction: VFC = () => {
  return (
    <div>
      <div className='w-screen block'>
        <div className='sm:flex'>
          <div className='sm:w-1/2'>
            {/* 仕事に関する助成金とは */}
            <div className='relative text-center text-xs sm:text-base xl:text-xl'>
              <img
                src='/about-pic1.png'
                alt='制度概要の画像'
                className='m-auto w-full h-80 sm:h-full sm:object-fill'
              />
              <div className='absolute text-white text-center top-16 p-5 sm:top-20 sm:left-10 2xl:top-40 2xl:left-32'>
                <p>仕事に関する助成金とは？ </p>
                <p className='pt-10'>起業・継業、就職、就農などに対しての補助金制度です。</p>
                <p className='pt-3 pb-10'>漁師や船員など特定の仕事に対しての補助金もあります。</p>
                <div className='flex justify-center'>
                  <img
                    src='/property-button.png'
                    alt='参考物件のリンクボタン'
                    className='w-32 sm:w-40'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 住宅建築補助とは */}
          <div className='sm:w-1/2'>
            <div className='relative text-center text-xs sm:text-base xl:text-xl'>
              <img
                src='/about-pic2.png'
                alt='制度概要の画像'
                className='m-auto w-full h-80 sm:h-96 xl:h-full'
              />
              <div className='absolute text-white text-center top-16 p-5 sm:top-20 sm:left-10 2xl:top-40 2xl:left-32'>
                <p>住宅建築補助とは？ </p>
                <p className='pt-10'>住宅を取得される方」を対象とした支援事業を実施。</p>
                <p className='pt-3 pb-10'>
                  申請に基づき住宅取得費の一部を「支援金」として補助する制度。
                </p>
                <div className='flex justify-center'>
                  <img
                    src='/property-button.png'
                    alt='参考物件のリンクボタン'
                    className='w-32 sm:w-40'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 定住促進奨励金とは */}
        <div className='sm:flex'>
          <div className='sm:w-1/2'>
            <div className='relative text-center text-xs sm:text-base xl:text-xl'>
              <img
                src='/about-pic3.png'
                alt='制度概要の画像'
                className='m-auto w-full h-80 sm:h-96 xl:h-full'
              />
              <div className='absolute text-white text-center top-16 p-5 sm:top-20 sm:left-10 2xl:top-40 2xl:left-32'>
                <p>定住促進奨励金とは？ </p>
                <p className='pt-10'>定住の促進を目的として交付される助成金であり、</p>
                <p className='pt-3 pb-10'>
                  居住の用に供する住宅を購入することを条件に交付される奨励金
                </p>
                <div className='flex justify-center'>
                  <img
                    src='/property-button.png'
                    alt='参考物件のリンクボタン'
                    className='w-32 sm:w-40'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* お試し移住体験とは */}
          <div className='sm:w-1/2'>
            <div className='relative text-center text-xs sm:text-base xl:text-xl'>
              <img
                src='/about-pic4.png'
                alt='制度概要の画像'
                className='m-auto w-full h-80 sm:h-96 xl:h-full'
              />
              <div className='absolute text-white text-center top-16 p-5 sm:top-20 sm:left-10 2xl:top-40 2xl:left-32'>
                <p>お試し移住体験とは </p>
                <p className='pt-10'>
                  田舎暮らしへの興味、移住を検討しているといった人を対象に一定の
                </p>
                <p className='pt-3 pb-10'>
                  期間実生活ができるように町が所有している施設を借し出す制度
                </p>
                <div className='flex justify-center'>
                  <img
                    src='/property-button.png'
                    alt='参考物件のリンクボタン'
                    className='w-32 sm:w-40'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
