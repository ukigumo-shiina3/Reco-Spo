import { VFC } from 'react';
import Link from 'next/link';
import { Toaster } from 'react-hot-toast';
import { Sidebar } from 'src/components/Layout/Sidebar';
import { Admin } from 'src/types/admin';

export const ProfileEditForm: VFC<Admin> = (props) => {
  const {
    email,
    password,
    prefecture,
    group,
    setPrefecture,
    setGroup,
    setEmail,
    setPassword,
    handleProfileEdit,
  } = props;
  return (
    <div className='flex h-full bg-gray-200'>
      <Sidebar group={group} />
      <div className='bg-white h-full ml-auto mr-auto my-20 px-6 overflow-hidden shadow-lg md:w-2/5 md:px-16'>
        <h1 className='text-center pt-5 mt-5 md:text-2xl'>プロフィール編集</h1>
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
          <p className='text-sm pl-4'>変更</p>
        </div>
        <label htmlFor='prefecture' className='flex justify-start pt-10 pb-3'>
          都道府県
        </label>
        <input
          type='text'
          value={prefecture}
          onChange={(e) => {
            setPrefecture(e.target.value.trim());
          }}
          placeholder='山形県'
          className='w-full p-2 bg-gray-200 rounded-l-md placeholder-gray-500'
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
          className='w-full p-2 bg-gray-200 rounded-l-md placeholder-gray-500'
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
          className='w-full p-2 bg-gray-200 rounded-l-md placeholder-gray-500'
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
          className='w-full p-2 bg-gray-200 rounded-l-md placeholder-gray-500'
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
