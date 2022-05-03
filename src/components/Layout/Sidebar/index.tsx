/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, VFC } from 'react';
import { useCallback } from 'react';
import { supabase } from 'src/libs/supabase';
import { toast, Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useUser } from 'src/hooks/useSpotEditSelect';
import { Admin } from 'src/types/admin';

export const Sidebar: VFC = () => {
  const router = useRouter();
  const { adminId } = useUser();
  const [adminData, setAdminData] = useState<Admin | null>();

  const HandleLogout = useCallback(() => {
    supabase.auth.signOut();
    router.push('/admins/signin');
    toast.success('ログアウトが完了しました', {
      duration: 3000,
    });
  }, []);

  // adminsテーブルからadminidと一致するデータを取得
  const getAdmin = useCallback(
    async () => {
      if (adminId === null) return;
      const { data, error } = await supabase
        .from<Admin>('admins')
        .select('*')
        .eq('id', adminId)
        // single()で一件だけ取得する
        .single();
      if (error) {
        toast.error(error.message);
      }
      if (data == null) {
        toast.error('データが取得できませんでした');
      }
      setAdminData(data);
    },
    // adminIdが変更されたら実行
    [adminId],
  );

  useEffect(
    () => {
      getAdmin();
    },
    // adminidが変わったらgetAdminを実行
    [adminId],
  );

  return (
    <div>
      <div className='flex-1 w-28 h-full text-center bg-blue-300 md:w-56 '>
        <div>
          <div className='bg-blue-400 py-10'>
            <a className='font-fancy font-bold text-white text-xl md:text-4xl'>Reco Spo</a>
          </div>
          <div className='py-8 px-1 md:flex justify-center '>
            <Image
              src='/samples/spot-pic.jpeg'
              alt='admin_image'
              height={70}
              width={70}
              className='rounded-full'
            />
            {/* avatar画像を取得するタスクがまだなのでコメントアウト */}
            {/* {adminData?.avatar_url ? (
              <Image
              // avatar_urlだとDBからデータ引っ張れないので別の書き方をしてください 
                src='/0.5032829142478012.jpeg'
                alt='admin_image'
                height={70}
                width={70}
                className='rounded-full'
              />
            ) : (
              <Image
                src='/samples/spot-pic.jpeg'
                alt='admin_image'
                height={70}
                width={70}
                className='rounded-full'
              />
            )} */}
            <div className='text-white p-3'>
              <p className='text-xs pb-2 md:text-sm'>ようこそ</p>

              {adminData ? (
                <p className='text-xs pb-2 md:text-sm'>{adminData?.group}様</p>
              ) : (
                <p className='text-xs pb-2 md:text-sm'>自治体担当者様</p>
              )}
            </div>
          </div>
          <div className='flex flex-col'>
            <Link href='/admins/' passHref>
              <a className='text-xs text-center text-white  hover:bg-blue-400 py-8 lg:text-sm '>
                プロフィール編集
              </a>
            </Link>
            <Link href='/admins/spots/post' passHref>
              <a className='text-xs text-center text-white  hover:bg-blue-400 py-8 lg:text-sm '>
                スポット投稿
              </a>
            </Link>
            <Link href={`/admins/spots/${adminId}/edit`} passHref>
              <a className='text-xs text-center text-white  hover:bg-blue-400 py-8 lg:text-sm '>
                スポット編集
              </a>
            </Link>
            <a className='text-xs text-center text-white  hover:bg-blue-400 py-8 lg:text-sm '>
              <button onClick={HandleLogout}>ログアウト</button>
            </a>
          </div>
          <Toaster />
        </div>
      </div>
    </div>
  );
};
