import Image from 'next/image';
import { NextPage } from 'next';
import { UserLayout } from 'src/components/Layout/UserLayout';

const System: NextPage = () => {
  return (
    <UserLayout>
      <div className='w-screen block'>
        <Image
          src='/main-visual3.png'
          quality={100}
          width={2000}
          height={650}
          layout='responsive'
          alt='制度概要のメイン画像'
        />
      </div>

      {/* 居住支援制度とは  */}
      <div className='container justify-center mx-auto mt-5 p-5 md:px-10 py-5  max-w-[1080px]'>
        <Image
          src='/system-heading1.png'
          quality={100}
          width={180}
          height={50}
          alt='居住支援制度とは'
        />
        <p className='mb-4 text-sm'>地方などへの移住をサポートする制度です。</p>
        <p className='mb-4 text-sm'>代表的な支援制度は、以下のようなものがあります。</p>
        <div className='md:flex'>
          <p className='mb-4 text-sm'>・結婚や子育ての支援金</p>
          <p className='mb-4 text-sm'>・就農での支援金</p>
          <p className='mb-4 text-sm'>・移住先の家賃補助</p>
          <p className='mb-4 text-sm'>・マイホームの建築費補助</p>
          <p className='mb-4 text-sm'>・移住体験の宿泊費支援</p>
        </div>
      </div>

      {/* 住宅支援制度とは */}
      <div className='container justify-center mx-auto  p-5 md:px-10 py-5  max-w-[1080px]'>
        <Image
          src='/system-heading2.png'
          quality={100}
          width={180}
          height={50}
          alt='住宅建築補助とは'
        />
        <p className='mb-4 text-sm'>・「住宅を取得される方」を対象とした支援事業を実施。</p>
        <p className='mb-4 text-sm'>・申請に基づき住宅取得費の一部を「支援金」として補助する制度</p>
      </div>

      {/* 定住促進奨励金とは */}
      <div className='container justify-center mx-auto  p-5 md:px-10 py-5  max-w-[1080px]'>
        <Image
          src='/system-heading3.png'
          quality={100}
          width={180}
          height={50}
          alt='定住促進奨励金とは'
        />
        <p className='mb-4 text-sm'>
          ・定住の促進を目的として交付される助成金であり、居住の用に供する住宅を購入することを条件に
          交付される奨励金です。
        </p>
        <p className='mb-4 text-sm'>
          ・また、特定の期間居住することで家と土地を無償で譲り受ける自治体もあります。
        </p>
      </div>

      {/* お試し暮らしとは */}
      <div className='container justify-center mx-auto  p-5 md:px-10 py-5  max-w-[1080px]'>
        <Image
          src='/system-heading4.png'
          quality={100}
          width={180}
          height={50}
          alt='定住促進奨励金とは'
        />
        <p className='mb-4 text-sm'>
          ・田舎暮らしに興味のある方や移住を検討されている方に対し、一定の期間実生活ができるように町が所有している施設を
          借りることができる制度。
        </p>
        <p className='mb-4 text-sm'>
          ・最短1泊からリーズナブルな料金でお試しでリアルなその町や村での暮らしを体験することができます。
        </p>
      </div>

      {/* 子育て支援とは */}
      <div className='container justify-center mx-auto  p-5 md:px-10 py-5  max-w-[1080px]'>
        <Image
          src='/system-heading5.png'
          quality={100}
          width={180}
          height={50}
          alt='子育て支援とは'
        />
        <p className='mb-4 text-sm'>
          ・対象は移住者に限りませんが、地方では保育所待機児童ゼロ、出産祝い金、不妊治療費助成、
          保育士による子育て支援サービス、子供の給食費・医療費無料、奨学金返済免除など子育て支援が
          充実しています。
        </p>
      </div>

      {/* 空き家バンクとは */}
      <div className='container justify-center mx-auto  p-5 md:px-10 py-5  max-w-[1080px]'>
        <Image
          src='/system-heading5.png'
          quality={100}
          width={180}
          height={50}
          alt='空き家バンクとは'
        />
        <p className='mb-4 text-sm'>
          ・「空き家バンク」とは、空き家の賃貸・売却を希望する所有者から提供された情報を集約し、
          空き家をこれから利用・活用したいとお考えの方に紹介する制度です。
        </p>
      </div>

      {/* 仕事への補助金とは */}
      <div className='container justify-center mx-auto  p-5 md:px-10 py-5  max-w-[1080px]'>
        <Image
          src='/system-heading5.png'
          quality={100}
          width={180}
          height={50}
          alt='仕事への補助金とは'
        />
        <p className='mb-4 text-sm'>・起業・継業、就職、就農などに対しての補助金制度です。</p>
        <p className='mb-4 text-sm'>・漁師や船員など特定の仕事に対しての補助金もあります。</p>
      </div>
    </UserLayout>
  );
};

export default System;
