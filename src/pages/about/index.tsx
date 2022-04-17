import Image from 'next/image';
import { NextPage } from 'next';
import { UserLayout } from 'src/components/Layout/UserLayout';

const About: NextPage = () => {
  return (
    <UserLayout>
      <div className='w-screen block '>
        <Image
          src='/main-visual2.png'
          quality={100}
          width={2000}
          height={700}
          objectFit='contain'
          layout='responsive'
          alt='サイト概要のメイン画像'
        />
      </div>
      <div className='container justify-center mx-auto mt-5 p-5 md:px-10 py-5 max-w-[1080px]'>
        {/* Reco Spoとは */}
        <Image src='/about-heading1.png' width={150} height={50} alt='Reco Spoとは' />
        <p className='mb-4 text-sm'>
          将来的に田舎暮らしに憧れを持っているが、日本各地それぞれの土地の魅力は様々。
        </p>
        <p className='mb-4 text-sm'>実際その土地に住むメリットや魅力は何があるのだろうか？</p>
        <p className='mb-4 text-sm'>
          Reco
          Spoでは、自治体ごとに発信されている住宅支援やお試し移住体験といった制度を見比べることで
          自分にあったスポットを見つけることができます。
        </p>
        <p className='mb-4 text-sm'>
          また、町の魅力的な制度を発信したい自治体は登録をすることでスポットの投稿を行うことができます。
        </p>
        <p className='mb-4 text-sm'>
          Reco
          Spoは田舎暮らしをしてみたい人と、支援制度を利用して町に住んで欲しいという自治体の願いを結びつけるサイトです。
        </p>
      </div>

      {/* 制作背景 */}
      <div className='container justify-center mx-auto  p-5 md:px-10 py-5 max-w-[1080px]'>
        <Image src='/about-heading2.png' width={150} height={50} alt='制作背景' />
        <p className='mb-4 text-sm'>
          ・政治・経済・文化・人口など、社会における資本・資源・活動が東京に集中してます。
        </p>
        <p className='mb-4 text-sm'>
          ・そのため、東京に居住者の増加、地方出身の方が東京などの都市部に居住し、地方の人口が減少している。
        </p>
        <p className='mb-4 text-sm'>
          ・自治体ごとに公表されている居住支援制度は意外と知られていないため、知ってもらえる場を作り、
          地方居住者が増えるきっかけづくりをしたいと考えました。
        </p>
      </div>

      {/* 使い方 */}
      <div className='container justify-center mx-auto  p-5 md:px-10 py-5 max-w-[1080px]'>
        <Image src='/about-heading3.png' width={150} height={50} alt='使い方' />
        <p className='mb-4 text-sm'>◆ユーザー</p>
        <p className='mb-4 text-sm'>
          ・スポット一覧ページの絞り込み検索ボタンから「都道府県」もしくは「制度」を指定して絞り込み検索ができます。
        </p>
        <p className='mb-4 text-sm'>
          ・地図検索から日本全国で登録されているスポットを地図上から探すことができます。
        </p>
        <p className='mb-4 text-sm'>
          ・スポットの詳細ページのお問い合わせ先から気に入ったスポットがあれば、メールアドレスかお電話で問い合わせてみてください。
        </p>
        <p className='mb-4 text-sm'>◆自治体</p>
        <p className='mb-4 text-sm'>
          ・ヘッダーの自治体登録、もしくはトップページの「自治体とスポット登録はこちら」のボタンから登録できます。
        </p>
        <p className='mb-4 text-sm'>
          ・最大5つの画像とアピールポイント、物件詳細、お問い合わせ先の情報を入力できます。
        </p>
      </div>
    </UserLayout>
  );
};

export default About;
