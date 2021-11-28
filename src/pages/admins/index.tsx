import { useRouter } from 'next/router';
import Link from 'next/link';
import { Sidebar } from 'src/components/layout/Sidebar';
import { supabase } from 'src/libs/supabase';
import useAuth from 'src/hooks/useAuth';
import { useCallback, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

type Props = {
  email: string;
  password: string;
  image_id: number;
  prefecture: string;
  group: string;
};

const ProfileEdit: React.VFC<Props> = (props) => {
  const [prefecture, setPrefecture] = useState('');
  const [group, setGroup] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();
  const session = useAuth(true);
  const user = supabase.auth.user();

  console.log({ user, session });

  const HandleProfileEdit = useCallback(async () => {
    console.log(user?.id);

    if (!user) return;
    const { data, error } = await supabase
      .from('admins')
      .update({
        // image_id: image_id,
        prefecture: prefecture,
        group: group,
        email: email,
        password: password,
      })
      .eq('id', user.id);
    console.log({ data, error });

    if (error) {
      console.log(error.message);
      throw error;
    }

    toast.success('プロフィールが更新されました', {
      duration: 3000,
    });
  }, [prefecture, group, email, password]);

  return (
    <div>
      <div className='flex h-full bg-gray-200'>
        <Sidebar />
        <div className='bg-white h-full ml-auto mr-auto my-20 px-6 overflow-hidden shadow-lg md:w-2/5 md:px-16'>
          <h1 className='text-center pt-5 mt-5 md:text-2xl'>プロフィール編集</h1>
          <div className='pt-5 mt-5'>
            <img src='/profile-icon.png' alt='image' className='w-16 h-16 rounded-full' />
            <p className='text-sm pl-4 mt-2'>変更</p>
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
            placeholder='飽海郡遊佐町'
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
                onClick={HandleProfileEdit}
                className=' px-4 py-2 mt-10 mx-6 text-white bg-blue-300 rounded-lg'
              >
                変更
              </button>
            </Link>
          </div>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
