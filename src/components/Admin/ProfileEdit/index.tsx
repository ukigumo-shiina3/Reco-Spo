/* eslint-disable @next/next/no-img-element */
import { VFC } from 'react';
import Link from 'next/link';
import { Toaster } from 'react-hot-toast';
import { Sidebar } from 'src/components/Layout/Sidebar';
import { Admin } from 'src/types/admin';

export const ProfileEditForm: VFC<Admin> = (props) => {
  const { email, password, prefecture, group, setAdmin, handleProfileEdit } = props;

  const defaultSrc =
    'https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png';

  return (
    <div className='flex bg-gray-100 h-full'>
      <Sidebar group={group} />
      <div className='bg-gray-200 h-full ml-auto mr-auto my-20 px-6 sm:px-32 overflow-hidden shadow-lg '>
        <h1 className='text-3xl mt-24'>プロフィール編集</h1>
        <div className='pt-5 mt-5'>
          {/* <Avatar
          url={avatar_url}
          size={150}
          onUpload={(url) => {
            setAvatarUrl(url);
            updateProfile({ username, website, avatar_url: url });
          }}
        /> */}
          {/* <img
          src={files?.source || defaultSrc}
          alt='preview'
          className='w-16 h-16 rounded-full'
        />
        

        <input
          type='button'
          // value='{avatar_url}'
          onClick={
            () =>
              selectFiles({ accept: 'image/*' }, ({ source, name, size, file }) => {
                console.log('Files Selected', { name, size, source, file });
              })
            // onChange={(e) => {
            //   setAvatarUrl(e.target.value.trim());
            // }}
          }
        /> */}
          <img src='/profile-icon.png' alt='image' className='w-16 h-16 rounded-full' />
          <p className='text-sm pl-4 mt-2'>変更</p>
        </div>
        <label htmlFor='prefecture' className='flex justify-start pt-10 pb-3'>
          都道府県
        </label>
        <input
          type='text'
          value={prefecture}
          onChange={(e) => {
            setAdmin({ prefecture: e.target.value.trim });
          }}
          placeholder='山形県'
          className='w-full p-2 rounded-l-md'
        />
        <label htmlFor='group' className='flex justify-start pt-10 pb-3'>
          自治体
        </label>
        <input
          type='text'
          value={group}
          onChange={(e) => {
            setGroup(e.target.value.trim());
          }}
          placeholder='遊佐町役場'
          className='w-full p-2 rounded-l-md'
        />
        <label htmlFor='email' className='flex justify-start pt-10 pb-3'>
          メールアドレス
        </label>
        <input
          type='text'
          value={email}
          // defaultValue={admins.email}
          onChange={(e) => {
            setEmail(e.target.value.trim());
          }}
          placeholder='reco-spo@gmail.com'
          className='w-full p-2 rounded-l-md'
        />
        <label htmlFor='password' className='flex justify-start pt-10 pb-3'>
          パスワード
        </label>
        <input
          type='text'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value.trim());
          }}
          placeholder='test1234'
          className='w-full p-2 rounded-l-md'
        />
        <div className='text-center pb-10'>
          <Link href='/admins' passHref>
            <button
              onClick={handleProfileEdit}
              className=' px-4 py-2 mt-10 mx-6 text-white bg-blue-300 rounded-lg'
            >
              変更
            </button>
          </Link>
        </div>
        <Toaster />
      </div>
    </div>
  );
};
