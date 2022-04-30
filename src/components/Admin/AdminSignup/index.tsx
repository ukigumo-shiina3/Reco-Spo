/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
import Image from 'next/image';
import type { VFC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { supabase } from 'src/libs/supabase';
import { toast, Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { AdminAuthLayout } from 'src/components/Layout/AdminAuthLayout';
import { Signup } from 'src/types/signup';

export const AdminSignup: VFC<Signup> = (props, session) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignup = useCallback(async () => {
    const { user, session, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    console.log(user);
    console.log(session);
    console.log(error);

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

  const router = useRouter();

  useEffect(() => {
    console.group('useEffect');
    console.log('session: ', session);
    console.groupEnd();
  }, [session]);

  return (
    <AdminAuthLayout>
      <div className='hidden md:block z-0 w-1/2 '>
        <Image
          src='/samples/auth-pic.jpg'
          layout='fill'
          objectFit='cover'
          quality={100}
          alt='管理画面画像'
        />
      </div>

      <div className='z-10 w-full rounded overflow-hidden shadow-2xl mr-0 ml-auto md:w-1/2 bg-gray-200'>
        <div className='p-10 my-20 bg-white xs:mx-16 md:mx-20'>
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

          <div className='flex justify-center  pl-4 pb-10'>
            <Link href='/admins' passHref>
              <button
                onClick={handleSignup}
                className='px-6 py-3 mt-10 mx-6 text-white bg-blue-300 rounded-lg'
              >
                {props.button}
              </button>
            </Link>
          </div>
          <Toaster />
        </div>
      </div>
    </AdminAuthLayout>
  );
};
