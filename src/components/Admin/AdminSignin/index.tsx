/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useMemo } from 'react';
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
  signinButton: string;
  testSigninButton: string;
  email: string;
  password: string;
  session: Session | null;
};

export type AdminSignin = {
  email: string;
  password: string;
};

const EMAIL = process.env.NEXT_PUBLIC_EMAIL;
const PASSWORD = process.env.NEXT_PUBLIC_PASSWORD;

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

  const handleTestSignin = useCallback(async () => {
    const { user, session, error } = await supabase.auth.signIn({
      email: EMAIL,
      password: PASSWORD,
    });

    console.log(user);
    console.log(session);
    console.log(error);

    if (session) {
      toast.success('テストログインが完了しました', {
        duration: 3000,
      });
      router.push('/admins');
    }
  }, [email, password]);

  const router = useRouter();

  useEffect(() => {
    console.group('useEffect');
    console.log('session: ', session);
    console.groupEnd();
  }, [session]);

  return useMemo(
    () => (
      <AdminAuthLayout>
        <div className='hidden lg:block z-0 w-1/2'>
          <Image
            src='/samples/auth-pic.jpg'
            layout='fill'
            objectFit='cover'
            quality={100}
            alt='管理画面画像'
          />
        </div>
        <div className='flex justify-center items-center z-10 h-screen w-full rounded overflow-hidden shadow-2xl mr-0 ml-auto my-auto lg:w-1/2 bg-blue-50'>
          <div className='flex flex-col w-full justify-center items-center'>
            <div className='font-bold text-2xl text-center mt-8 mb-2'>{props.title}</div>
            <div className='flex flex-col justify-center items-center w-full max-w-[80%] p-4 mt-8 bg-white md:py-16 md:px-10 '>
              <div className='m-auto max-w-full'>
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
                  className='w-[280px] sm:w-[300px] md:w-[380px] max-w-full p-2 rounded-md border-2 placeholder-gray-500'
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
                  className='w-[280px] sm:w-[300px] md:w-[380px] max-w-full p-2  rounded-md border-2 placeholder-gray-500'
                />
              </div>

              <div className='pb-10'>
                <div className='flex flex-col items-center'>
                  <Link href='/admins' passHref>
                    <button
                      onClick={handleSignin}
                      className='px-5 py-3 mt-10 text-white bg-blue-300 rounded-lg w-[250px] sm:w-[300px]'
                    >
                      {props.signinButton}
                    </button>
                  </Link>
                  <Link href='/admins' passHref>
                    <button
                      onClick={handleTestSignin}
                      className='px-5 py-3 mt-2 text-white bg-green-300 rounded-lg w-[250px] sm:w-[300px]'
                    >
                      <div className=''>{props.testSigninButton}</div>
                    </button>
                  </Link>
                </div>
                <div className='flex flex-col items-center mt-6'>
                  <Link href='/admins/signup' passHref>
                    <a className='text-sm pt-2 w-[140px] '>
                      <p className='text-indigo-700'>新規会員登録はこちら</p>
                    </a>
                  </Link>
                </div>
                <Toaster />
              </div>
            </div>
          </div>
        </div>
      </AdminAuthLayout>
    ),
    [email, password, handleSignin, handleTestSignin],
  );
};
