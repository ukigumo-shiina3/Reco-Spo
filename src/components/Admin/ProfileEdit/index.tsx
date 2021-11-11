import Link from 'next/link';
import Image from 'next/image';
import { ReactNode, useState } from 'react';

type Props = {
  admin_email: string;
  admin_password: string;
  children: ReactNode;
};

export const ProfileEdit: React.VFC = () => {
  const [prefecture, setPrefecture] = useState('');
  const [group, setGroup] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div className='bg-white ml-auto mr-auto mt-20 px-16 flex-1 max-w-5xl w-72 rounded overflow-hidden shadow-lg'>
        <h1 className='text-center text-2xl pt-5'>プロフィール編集</h1>
        <div className='pt-5'>
          <Image
            src='/profile-icon.png'
            alt='admin_image'
            height={70}
            width={70}
            className='rounded-full'
          />
          <p className='text-sm pl-5'>変更</p>
        </div>
        <label htmlFor='name' className='flex justify-start pt-10 pb-3'>
          都道府県
        </label>
        <input
          type='text'
          name='prefecture'
          value={prefecture}
          id='admin_prefecture'
          onChange={(e) => {
            setPrefecture(e.target.value);
          }}
          placeholder='山形県'
          className='w-full p-2 bg-gray-200 rounded-l-md placeholder-gray-500'
        />
        <label htmlFor='name' className='flex justify-start pt-10 pb-3'>
          自治体
        </label>
        <input
          type='text'
          name='group'
          value={group}
          id='admin_group'
          onChange={(e) => {
            setGroup(e.target.value);
          }}
          placeholder='飽海郡遊佐町'
          className='w-full p-2 bg-gray-200 rounded-l-md placeholder-gray-500'
        />
        <label htmlFor='name' className='flex justify-start pt-10 pb-3'>
          メールアドレス
        </label>
        <input
          type='text'
          name='email'
          value={email}
          id='admin_email'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder='reco-spo@gmail.com'
          className='w-full p-2 bg-gray-200 rounded-l-md placeholder-gray-500'
        />
        <label htmlFor='name' className='flex justify-start pt-10 pb-3'>
          パスワード
        </label>
        <input
          type='text'
          name='password'
          value={password}
          id='admin_password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder='test1234'
          className='w-2/3 p-2 bg-gray-200 rounded-l-md placeholder-gray-500'
        />
        <div className='flex pl-4 pb-10'>
          <Link href='/admins' passHref>
            <button
              //   onClick={HandleSignin}
              className='px-4 py-2 mt-10 mx-6 text-white bg-blue-300 rounded-lg'
            >
              変更
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
