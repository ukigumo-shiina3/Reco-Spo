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
import { useRecoil } from 'src/recoil/hooks';

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
          {/* <div className='w-full bg-white flex'> */}
          <Link href='/' passHref>
            <a className='block font-fancy font-bold text-4xl m-8'>Reco Spo</a>
          </Link>
          {/* <button onClick={openModal}> */}
          {/* <div className='' onClick={openModal}> */}
          <div className='' onClick={openModal}>
            <div className='absolute right-8 top-5 '>
              <Avatar url={avatarDownloadUrl} dummyImageUrl='/icons/profile-icon.png' size={70} />
            </div>
          </div>
          {/* </button> */}
          {console.log('openModal①', openModal)}
        </div>
        {console.log('openModal②', openModal)}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as='div' className='fixed inset-0 z-10 overflow-y-auto' onClose={closeModal}>
            <div className='min-h-screen px-4 text-center border-2'>
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
                <div className='absolute top-24 right-0 w-48 bg-white '>
                  <div className='flex flex-col'>
                    <div className='absolute right-4 '>
                      <button className='' onClick={closeModal}>
                        <div className='h-8 w-8'>✖︎</div>
                      </button>
                      {console.log(closeModal)}
                    </div>
                    <Dialog.Title
                      as='h3'
                      className='text-2xl pb-8 mt-12 border-b-2 border-gray-600'
                    >
                      {adminData ? (
                        <p className='text-xs pb-2 md:text-sm'>{adminData?.group}様</p>
                      ) : (
                        <p className='text-xs pb-2 md:text-sm'>自治体担当者様</p>
                      )}
                    </Dialog.Title>
                    <Link href='/admins/' passHref>
                      <a className='text-xs hover:bg-gray-400-400 py-8 lg:text-sm '>
                        プロフィール編集
                      </a>
                    </Link>
                    <Link href='/admins/spots/post' passHref>
                      <a className='text-xs hover:bg-gray-400 py-8 lg:text-sm '>スポット投稿</a>
                    </Link>
                    <Link href={`/admins/spots/${adminId}/edit`} passHref>
                      <a className='text-xs hover:bg-gray-400 py-8 lg:text-sm '>スポット編集</a>
                    </Link>
                    <a className='text-xs hover:bg-gray-400 py-8 lg:text-sm '>
                      <button onClick={HandleLogout}>ログアウト</button>
                    </a>
                  </div>
                </div>
                {/* <Toaster /> */}
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
        {console.log('isOpen', isOpen)}

        <div className='flex justify-center items-center h-screen bg-blue-50'>
          <div className='flex flex-col w-full justify-center items-center'>{props.children}</div>
        </div>
      </>
    ),
    [adminData, HandleLogout, isOpen, adminId],
  );
};
