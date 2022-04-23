/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, VFC } from 'react';
import { useCallback } from 'react';
import { supabase } from 'src/libs/supabase';
import { toast, Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { Spot } from 'src/types/spot';

type Props = {
  group: string;
};

export const Sidebar: VFC<Props> = (props) => {
  const router = useRouter();

  const [adminId, setAdminId] = useState<string>();
  const [spotData, setSpotData] = useState<Spot[] | null>();
  const loginAccount = supabase.auth;
  const getSpotsEdit = useCallback(async (admin_id) => {
    // DBからスポット情報を取得　WHERE旬はareaカラムは兵庫県で絞り、admin_idカラムはadminIdで絞ってます
    const { data: spot, error } = await supabase
      .from<Spot>('spots')
      .select('*')
      .eq(`area`, `兵庫県`)
      .eq(`admin_id`, admin_id);
    // spotデータがあればuseSateのspotDataに代入
    if (spot) {
      setSpotData(spot);
    }
  }, []);
  // セッション情報のjsonが直ぐに取得できないことがあるので、if文でデータが取得できるまで待ってから取得
  useEffect(() => {
    if (loginAccount.session()?.user?.id !== undefined) {
      //ここでgetSpotsEditの引数にadmin_idを渡していないのはsetAdminIdが間に合わないから
      // console.log(loginAccount.session()?.user?.id);
      setAdminId(loginAccount.session()?.user?.id);
      getSpotsEdit(supabase.auth.session()?.user?.id);
    }
  }, [loginAccount.session()?.user?.id]);

  console.log(spotData);

  const HandleLogout = useCallback(() => {
    supabase.auth.signOut();
    router.push('/admins/signin');
    toast.success('ログアウトが完了しました', {
      duration: 3000,
    });
  }, []);

  return (
    <div>
      <div className='flex-1 w-28 h-full text-center bg-blue-300 md:w-56 '>
        <div>
          <div className='bg-blue-400 py-10'>
            <a className='font-fancy font-bold text-white text-xl md:text-4xl'>Reco Spo</a>
          </div>
          <div className='py-8 px-1 md:flex justify-center '>
            <Image
              src='/spot-pic.jpeg'
              alt='admin_image'
              height={70}
              width={70}
              className='rounded-full'
            />
            <div className='text-white p-3'>
              <p className='text-xs pb-2 md:text-sm'>ようこそ</p>

              {props.group ? (
                <p className='text-xs pb-2 md:text-sm'>{props.group}</p>
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
