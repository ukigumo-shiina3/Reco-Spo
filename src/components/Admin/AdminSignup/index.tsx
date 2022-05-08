/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
import Image from 'next/image';
import { useMemo, VFC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { supabase } from 'src/libs/supabase';
import { toast, Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { AdminAuthLayout } from 'src/components/Layout/AdminAuthLayout';
import { Signup } from 'src/types/signup';

export const AdminSignup: VFC<Signup> = (props) => {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignup = useCallback(async () => {
    console.log('handleSignup');

    const { user, session } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    console.log('ユーザー', user);
    console.log('セッション', session);

    if (email == '' || password == '') {
      toast.error('新規登録情報を入力してください');
      router.push('/admins/signup');
    } else email.length > 3 && password.length > 8;
    {
      toast.success('新規登録が完了しました', {
        duration: 3000,
      });
    }
  }, [email, password]);

  useEffect(() => {
    console.group('useEffect');
    console.groupEnd();
  }, []);

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

        <div className='flex justify-center items-center z-10 h-screen w-full rounded overflow-hidden shadow-2xl mr-0 ml-auto my-auto lg:w-1/2 bg-gray-200'>
          <div className='flex flex-col justify-center items-center w-full max-w-[80%] p-4 mt-14 bg-white md:mt-12 md:py-16 md:px-10 '>
            <div className='font-bold text-2xl text-center mt-8 mb-2'>{props.title}</div>
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
                className='w-[280px] sm:w-[300px] md:w-[380px] p-2 bg-gray-200 max-w-full rounded-md placeholder-gray-500'
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
                className='w-[280px] sm:w-[300px] md:w-[380px] max-w-full p-2 bg-gray-200 rounded-md placeholder-gray-500'
              />
            </div>

            <div className='flex justify-center  pl-4 pb-10'>
              <Link href='/admins' passHref>
                <button
                  onClick={handleSignup}
                  className='px-5 py-3 mt-10 text-white bg-blue-300 rounded-lg w-[200px] sm:w-[220px]'
                >
                  {props.button}
                </button>
              </Link>
            </div>
            <Toaster />
          </div>
        </div>
      </AdminAuthLayout>
    ),
    [email, password, handleSignup],
  );
};
