import React, { useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { supabase } from 'src/libs/supabase';
import { useRouter } from 'next/router';
import { Session } from '@supabase/supabase-js';

type AdminSigninProps = {
  title: string;
  button: string;
  session: Session | null;
};

export const AdminSignin: React.VFC<AdminSigninProps> = (props, session) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const HandleSignin = useCallback(async () => {
    const { user, data, error } = await supabase.auth.signIn({
      email: email,
      password: password,
    });
    console.log(user);
    console.log(data);
    console.log(error);
  }, [email, password]);

  const router = useRouter();

  useEffect(() => {
    console.group('useEffect');
    console.log('session: ', session);
    console.groupEnd();
  }, [session]);

  return (
    <div>
      <div className='flex h-screen'>
        <div className='hidden md:block z-0 w-1/2 '>
          <Image
            src='/auth-pic.jpg'
            layout='fill'
            objectFit='cover'
            quality={100}
            alt='管理画面画像'
          />
        </div>
        <div className='z-10 h-screen w-full rounded overflow-hidden shadow-2xl mr-0 ml-auto my-auto md:w-1/2 bg-gray-200'>
          <div className='p-10 sm:p-20 my-20 bg-white xs:mx-16 sm:mx-20'>
            <div className='font-bold text-2xl text-center mb-2'>{props.title}</div>
            <label htmlFor='email' className='flex justify-start pt-10 pb-3'>
              メールアドレス
            </label>
            <input
              type='text'
              name='email'
              value={email}
              id='email'
              onChange={(e) => {
                setEmail(e.target.value);
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
                setPassword(e.target.value);
              }}
              placeholder='test1234'
              className='w-full p-2 bg-gray-200 rounded-l-md placeholder-gray-500'
            />

            <div className='flex pr-4 pb-10'>
              <Link href='/admins' passHref>
                <button
                  onClick={HandleSignin}
                  className='px-6 py-3 mt-10 mr-4 text-white bg-blue-300 rounded-lg'
                >
                  {props.button}
                </button>
              </Link>
              <div className='mt-12 md:ml-5'>
                {/* <p className='text-sm border-b-2 '>ログイン情報をお忘れですか？</p> */}
                <Link href='/admins/signup' passHref>
                  <a className='text-sm border-b-2 pt-2'>新規会員登録はこちら</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
