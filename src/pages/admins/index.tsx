import { useRouter } from 'next/router';
import type { VFC } from 'react';
import Link from 'next/link';
import { Sidebar } from 'src/components/layout/Sidebar';
import { supabase } from 'src/libs/supabase';
import useAuth from 'src/hooks/useAuth';
import { useCallback, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useFileUpload } from 'use-file-upload';
import type { Signin } from 'src/types/signin';
// import Avatar from 'src/components/Photo/PhotoUpload';

const ProfileEdit: VFC<Signin> = (props) => {
  // const [image, setImage] = useState('');
  // const [avatar_url, setAvatarUrl] = useState<string>('');
  const [prefecture, setPrefecture] = useState<string>('');
  const [group, setGroup] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const router = useRouter();
  const session = useAuth(true);
  const user = supabase.auth.user();

  console.log({ user, session });

  const handleProfileEdit = useCallback(async () => {
    console.log(user?.id);

    if (!user) return;

    if (prefecture === '' || group === '' || password === '') {
      toast.error('入力されていない項目があります');
    } else {
      const { data, error } = await supabase
        .from('admins')
        .update({
          // avatar_url: avatar_url,
          prefecture: prefecture,
          group: group,
          email: email,
          password: password,
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
  }, [prefecture, group, email, password]);

  // const defaultSrc =
  //   'https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png';

  // const [files, selectFiles] = useFileUpload();

  return (
    <>
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
            name='prefecture'
            value={prefecture}
            id='prefecture'
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
            name='group'
            value={group}
            id='group'
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
            name='email'
            value={email}
            id='email'
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
            name='password'
            value={password}
            id='password'
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
    </>
  );
};

export default ProfileEdit;
