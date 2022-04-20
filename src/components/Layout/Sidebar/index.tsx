/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, VFC } from 'react';
import { useCallback } from 'react';
import { supabase } from 'src/libs/supabase';
import { toast, Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { getSpotsId } from 'src/hooks/useSpotIdSelect';
import { Spot } from 'src/types/spot';

type Props = {
  group: string;
};

export const Sidebar: VFC<Props> = (props) => {
  const router = useRouter();
  const [spot, setSpot] = useState<Spot>();
  const [id, setId] = useState<string>();

  const HandleLogout = useCallback(() => {
    supabase.auth.signOut();
    router.push('/admins/signin');
    toast.success('ログアウトが完了しました', {
      duration: 3000,
    });
  }, []);

  const fetchSpot = useCallback(async (id: string) => {
    const data = await getSpotsId(id);
    setSpot(data);
    console.log(data);
  }, []);

  useEffect(() => {
    if (router.asPath !== router.route) {
      setId(String(router.query.id));
    }
    // console.log(router.query.id);
  }, [router]);

  useEffect(() => {
    if (id) {
      fetchSpot(router.query.id as string);
    }
    // console.log(router.query.id);
  }, [id, fetchSpot, router.query.id]);

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
            {/* <Link href={`/${id}`} passHref> */}
            <a className='text-xs text-center text-white  hover:bg-blue-400 py-8 lg:text-sm '>
              スポット編集
            </a>
            {/* </Link> */}
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
