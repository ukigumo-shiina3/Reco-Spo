import Link from 'next/link';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { ReactNode, useState } from 'react';
import { supabase } from 'src/libs/supabase';

type Props = {
  admin_email: string;
  admin_password: string;
  children: ReactNode;
};

export const AdminSignup: React.VFC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const HandleSignup = async () => {
    const { user, data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    console.log(user);
    console.log(data);
    console.log(error);
  };

  return (
    <div>
      <div className='flex'>
        <div className='hidden md:block z-0 w-6/12 '>
          <Image
            src='/auth-pic.jpg'
            layout='fill'
            objectFit='cover'
            quality={100}
            alt='管理画面画像'
          />
        </div>

        <div className='z-10 w-full rounded overflow-hidden shadow-lg  mr-0 ml-auto md:w-6/12 bg-white'>
          <div className='p-10 ml-10'>
            <div className='font-bold text-2xl text-center mb-2'>新規登録</div>
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
              className='w-2/3 p-2 bg-gray-200 rounded-l-md placeholder-gray-500'
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

            <div className='flex justify-center  pl-4 pb-10'>
              <Link href='/admins' passHref>
                <button
                  onClick={HandleSignup}
                  className='px-4 py-2 mt-10 mx-6 text-white bg-blue-300 rounded-lg'
                >
                  新規登録
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};