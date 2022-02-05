/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import type { VFC } from 'react';
import { supabase } from 'src/libs/supabase';
import useAuth from 'src/hooks/useAuth';
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import { Toaster } from 'react-hot-toast';
import { Sidebar } from 'src/components/Layout/Sidebar';
import { Admin } from 'src/types/admin';
import { useFileUpload } from 'use-file-upload';
import { ProfileEditForm } from 'src/components/Admin/ProfileEdit';
// import Avatar from 'src/components/Photo/PhotoUpload';

const ProfileEdit: VFC = () => {
  // const [avatar_url, setAvatarUrl] = useState<string>('');

  const [admin, setAdmin] = useState<Admin>({
    email: '',
    password: '',
    prefecture: '',
    group: '',
  });

  const router = useRouter();
  const session = useAuth(true);
  const user = supabase.auth.user();

  console.log({ user, session });

  const handleProfileEdit = useCallback(async () => {
    console.log(user?.id);

    if (!user) return;

    if (admin.prefecture === '' || admin.group === '' || admin.password === '') {
      toast.error('入力されていない項目があります');
    } else {
      const { data, error } = await supabase
        .from('admins')
        .update({
          // avatar_url: avatar_url,
          prefecture: admin.prefecture,
          group: admin.group,
          email: admin.email,
          password: admin.password,
        })
        .eq('id', user.id);
      if (error) {
        alert(error);
      }
      console.log({ data, error });

      toast.success('プロフィールが更新されました', {
        duration: 3000,
      });
    }
  }, [admin.prefecture, admin.group, admin.email, admin.password, user]);

  return (
    <>
      <div className='flex bg-gray-100 h-full'>
        <Sidebar group={''} />
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
            value={admin.prefecture}
            onChange={(e) => {
              setAdmin({ ...admin, prefecture: e.target.value.trim() });
            }}
            placeholder='山形県'
            className='w-full p-2 rounded-l-md'
          />
          <label htmlFor='group' className='flex justify-start pt-10 pb-3'>
            自治体
          </label>
          <input
            type='text'
            value={admin.group}
            onChange={(e) => {
              setAdmin({ ...admin, group: e.target.value.trim() });
            }}
            placeholder='遊佐町役場'
            className='w-full p-2 rounded-l-md'
          />
          <label htmlFor='email' className='flex justify-start pt-10 pb-3'>
            メールアドレス
          </label>
          <input
            type='text'
            value={admin.email}
            // defaultValue={admins.email}
            onChange={(e) => {
              setAdmin({ ...admin, email: e.target.value.trim() });
            }}
            placeholder='reco-spo@gmail.com'
            className='w-full p-2 rounded-l-md'
          />
          <label htmlFor='password' className='flex justify-start pt-10 pb-3'>
            パスワード
          </label>
          <input
            type='text'
            value={admin.password}
            onChange={(e) => {
              setAdmin({ ...admin, password: e.target.value.trim() });
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
    </>
  );
};

export default ProfileEdit;
