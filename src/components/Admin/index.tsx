import Image from 'next/image';
import toast from 'react-hot-toast';
import { ReactNode, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { supabase } from 'src/libs/supabase';
import type { VFC } from 'react';

type Props = {
  email: string;
  password: string;
  children: ReactNode;
};

// const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
// const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;

// const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export const Admin: React.VFC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const { user, error } = await supabase.auth.signIn({
  //   email: 'alice@example.com',
  //   password: 'p@ssW0rd123456',
  // });
  // console.log({ user, error });

  // logIn().catch(console.error);

  const handleChange = (e) => {
    setEmail(() => e.target.value);
    setPassword(() => e.target.value);
  };

  const HandleSignin = () => {
    alert(email);
    alert(password);
  };

  return (
    <div>
      {/* <div className='flex'>
        <div className=''>
          <Image
            src='/auth-pic.jpg'
            w='full'
            h='full'
            fit='cover'
            layout='fill'
            alt='管理画面画像'
          />
        </div> */}
      <div className='max-w-lg rounded overflow-hidden shadow-lg'>
        <div className='px-10 py-4'>
          <div className='font-bold text-2xl text-center mb-2'>ログイン</div>
          <label htmlFor='name' className='flex justify-start pt-10 pb-3'>
            メールアドレス
          </label>
          <input
            type='text'
            id='email'
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
            id='password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder='test1234'
            className='w-2/3 p-2 bg-gray-200 rounded-l-md placeholder-gray-500'
          />
        </div>

        <div className='flex pl-4 pb-10'>
          <button
            onClick={HandleSignin}
            className='px-4 py-2 mt-10 mx-6 text-white bg-blue-300 rounded-lg'
          >
            ログイン
          </button>
          <div className='flex flex-col mt-10'>
            <p className='text-sm border-b-2 '>ログイン情報をお忘れですか？</p>
            <p className='text-sm border-b-2'>新規会員登録はこちら</p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
