/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useCallback, useEffect, useMemo, useState, VFC } from 'react';
import Link from 'next/link';
import Avatar from 'src/components/Avatar';
import { useAdminImage } from 'src/hooks/useAdminImage';
import { Dialog, Transition } from '@headlessui/react';
import { useUser } from 'src/hooks/useSpotEditSelect';
import { supabase } from 'src/libs/supabase';
import { toast, Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { Admin } from 'src/types/admin';

type Props = {
  children: React.ReactNode;
};

export const AdminInfoLayout: VFC<Props> = (props) => {
  const router = useRouter();
  const { avatarDownloadUrl } = useAdminImage();
  const { adminId } = useUser();
  const [adminData, setAdminData] = useState<Admin | null>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const HandleLogout = useCallback(() => {
    supabase.auth.signOut();
    router.push('/admins/signin');
    toast.success('ログアウトが完了しました', {
      duration: 3000,
    });
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  // adminsテーブルからadminidと一致するデータを取得
  const getAdmin = useCallback(
    async () => {
      if (adminId === null) return;
      const { data, error } = await supabase
        .from<Admin>('admins')
        .select('*')
        .eq('id', adminId)
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

  return useMemo(
    () => (
      <>
        <div className='overflow-hidden shadow-lg bg-white'>
          <Link href='/' passHref>
            <a className='block font-fancy font-bold text-4xl m-8'>Reco Spo</a>
          </Link>
          <div className='' onClick={openModal}>
            <div className='absolute right-8 top-5 '>
              <Avatar url={avatarDownloadUrl} dummyImageUrl='/icons/profile-icon.png' size={70} />
            </div>
          </div>
        </div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as='div' className='fixed inset-0 z-10 overflow-y-auto' onClose={closeModal}>
            <div className='min-h-screen px-4 border-2 rounded-3xl'>
              <span className='inline-block h-screen align-middle' aria-hidden='true'>
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <div className='absolute top-28 right-4 w-48 bg-gray-50 rounded-3xl cursor-pointer'>
                  <div className='flex flex-col'>
                    <div className='absolute top-8 right-4'>
                      <button className='outline-none' onClick={closeModal}>
                        <div className='h-8 w-8'>✖︎</div>
                      </button>
                    </div>
                    <Dialog.Title
                      as='h3'
                      className='text-2xl py-8 mt-8 pl-4 border-b-2 border-gray-200'
                    >
                      {adminData ? (
                        <p className='text-xs md:text-sm'>{adminData?.group}様</p>
                      ) : (
                        <p className='text-xs md:text-sm'>自治体担当者様</p>
                      )}
                    </Dialog.Title>
                    <Link href='/admins/' passHref>
                      <a className='text-xs hover:bg-blue-100 py-8  pl-4 lg:text-sm border-b-2  border-gray-200 '>
                        プロフィール編集
                      </a>
                    </Link>
                    <Link href='/admins/spots/post' passHref>
                      <a className='text-xs hover:bg-blue-100 py-8  pl-4 lg:text-sm border-b-2  border-gray-200 '>
                        スポット投稿
                      </a>
                    </Link>
                    <Link href={`/admins/spots/${adminId}/edit`} passHref>
                      <a className='text-xs hover:bg-blue-100 py-8  pl-4 lg:text-sm border-b-2  border-gray-200 '>
                        スポット編集
                      </a>
                    </Link>
                    <a className='text-xs hover:bg-blue-100 py-8  pl-4 lg:text-sm border-gray-200 '>
                      <button onClick={HandleLogout}>ログアウト</button>
                    </a>
                  </div>
                  <Toaster />
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>

        <div className='flex justify-center items-center h-full bg-blue-50'>
          <div className='flex flex-col w-full justify-center items-center'>{props.children}</div>
        </div>
      </>
    ),
    [adminData, HandleLogout, isOpen, adminId, avatarDownloadUrl],
  );
};
