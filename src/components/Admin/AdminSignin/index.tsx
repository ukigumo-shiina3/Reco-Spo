/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { VFC } from 'react';
import { useState } from 'react';
import { supabase } from 'src/libs/supabase';
import { useRouter } from 'next/router';
import { Session } from '@supabase/supabase-js';
import { toast, Toaster } from 'react-hot-toast';
import { AdminAuthLayout } from 'src/components/Layout/AdminAuthLayout';

type Props = {
  title: string;
  button: string;
  email: string;
  password: string;
  session: Session | null;
};

export type AdminSignin = {
  email: string;
  password: string;
};

export const AdminSignin: VFC<Props> = (props, session) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignin = useCallback(async () => {
    const { user, session, error } = await supabase.auth.signIn({
      email: email,
      password: password,
    });

    console.log(user);
    console.log(session);
    console.log(error);

    if (email == '' || password == '') {
      toast.error('ログイン情報を入力してください');
      router.push('/admins/signin');
    } else {
      if (session) {
        toast.success('ログインが完了しました', {
          duration: 3000,
        });
      }
    }
  }, [email, password]);

  const router = useRouter();

  useEffect(() => {
    console.group('useEffect');
    console.log('session: ', session);
    console.groupEnd();
  }, [session]);

  const HandleResetPassword = useCallback(() => {
    supabase.auth.api.resetPasswordForEmail(email);
  }, [email]);

  return (
    <AdminAuthLayout>
      <div className='hidden md:block z-0 w-1/2 '>
        <Image
          src='/sample/auth-pic.jpg'
          layout='fill'
          objectFit='cover'
          quality={100}
          alt='管理画面画像'
        />
      </div>
      <div className='z-10 h-screen w-full rounded overflow-hidden shadow-2xl mr-0 ml-auto my-auto md:w-1/2 bg-gray-200'>
        <div className='p-5 my-20 bg-white xs:mx-16 sm:p-15 sm:mx-20'>
          <div className='font-bold text-2xl text-center mb-2'>{props.title}</div>
          <label htmlFor='email' className='flex justify-start pt-10 pb-3'>
            メールアドレス
          </label>
          <input
            type='text'
            value={email}
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

          <div className='flex pr-4 pb-10'>
            <Link href='/admins' passHref>
              <button
                onClick={handleSignin}
                className='px-5 py-1 mt-10 mr-4 text-white bg-blue-300 rounded-lg'
              >
                {props.button}
              </button>
            </Link>
            <div className='flex flex-col mt-12 md:ml-5'>
              <a className='text-sm border-b-2 '>
                <button onClick={HandleResetPassword}> ログイン情報をお忘れですか？</button>
              </a>
              <Link href='/admins/signup' passHref>
                <a className='text-sm border-b-2 pt-2'>新規会員登録はこちら</a>
              </Link>
            </div>
            <Toaster />
          </div>
        </div>
      </div>
    </AdminAuthLayout>
  );
};
