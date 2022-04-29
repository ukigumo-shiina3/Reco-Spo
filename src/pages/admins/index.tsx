/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, useEffect, VFC } from 'react';
import { supabase } from 'src/libs/supabase';
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import { Toaster } from 'react-hot-toast';
import { Sidebar } from 'src/components/Layout/Sidebar';
import { Admin } from 'src/types/admin';
import { DEFAULT_AVATARS_BUCKET } from 'src/libs/constant';
import UploadButton from 'src/components/Button/UploadButton/UploadButton';
import Avatar from 'src/components/Avatar';
import { Spinner } from '@chakra-ui/react';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';
import { Button, TextInput } from '@mantine/core';
import { useRecoil } from 'src/recoil/hooks';

const schema = z.object({
  // avatar_url: z.string().min(2, { message: 'Avatar_url should have at least 2 letters' }),
  email: z.string().email({ message: 'Invalid email' }),
  password: z.string().min(2, { message: 'Password should have at least 2 letters' }),
  prefecture: z.string().min(2, { message: 'Prefecture should have at least 2 letters' }),
  group: z.string().min(2, { message: 'Group should have at least 2 letters' })
});

const ProfileEdit: VFC = () => {
  const { admins, loading, group, setAdmins, setGroup } = useRecoil();
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      // avatar_url: '',
      email: admins.email,
      password: admins.password,
      prefecture: admins.prefecture,
      group: admins.group,
    },
  });
  const [admin, setAdmin] = useState<Admin>({
    id: '',
    avatar_url: '',
    email: '',
    password: '',
    prefecture: '',
    group: '',
  });

  // const [loading, setLoading] = useState<boolean>(true);
  const [uploading, setUploading] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<string | null>('');
  const [id, setId] = useState<string>('');
  const [error, setError] = useState(false);

  // const user = supabase.auth.user();

  const handleProfileEdit = useCallback(async () => {
    if (!admins?.id) { return }
    console.log("handleProfileEdit -> admins", admins)
    const { data, error } = await supabase
      .from('admins')
      .update({
        avatar_url: admins.avatar_url,
        prefecture: admins.prefecture,
        group: admins.group,
        email: admins.email,
        password: admins.password,
      })
      .eq('id', admins.id);
    if (error) {
      alert(error);
    }
    console.log({ data, error });

    toast.success('プロフィールが更新されました', {
      duration: 3000,
    });
  }, [admins]);

  useEffect(() => {
    console.log("test", admins)
    form.setValues({
      ...form,
      ...admins
    })
    handleProfileEdit()
  }, [admins])


  // TODO: リファクタ対象！！ 画像アップロード関連処理は別途ロジックを検討する
  // useEffect(() => {
  //   getProfile(id || '');
  // }, [user]);

  // const uploadAvatar = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
  //   try {
  //     setUploading(true);

  //     if (!event.target.files || event.target.files.length == 0) {
  //       throw '変更するプロフィール画像を選択してください';
  //     }

  //     const user = supabase.auth.user();
  //     const file = event.target.files[0];
  //     const fileExt = file.name.split('.').pop();
  //     const fileName = `${Math.random()}.${fileExt}`;
  //     const filePath = `${fileName}`;

  //     const { error: uploadError } = await supabase.storage
  //       .from(DEFAULT_AVATARS_BUCKET)
  //       .upload(filePath, file);

  //     if (uploadError) {
  //       throw uploadError;
  //     }

  //     const { error: updateError } = await supabase
  //       .from('admins')
  //       .update({
  //         avatar_url: filePath,
  //       })
  //       .eq('id', user?.id || '');

  //     if (updateError) {
  //       throw updateError;
  //     }

  //     setAvatar(filePath);
  //   } catch (error) {
  //     alert(error.message);
  //   } finally {
  //     setUploading(false);
  //   }
  // }, []);

  // function setProfile(profile: Admin | null) {
  //   if (!profile) {
  //     return;
  //   }
  //   setAvatar(profile.avatar_url);
  // }

  // const getProfile = useCallback(async (id: string) => {
  //   try {
  //     setLoading(true);
  //     const user = supabase.auth.user();

  //     const { data, error } = await supabase
  //       .from<Admin>('admins')
  //       .select('id, avatar_url')
  //       .eq('id', user?.id || '')
  //       .single();

  //     if (error) {
  //       throw error;
  //     }

  //     setProfile(data);
  //   } catch (error) {
  //     console.log('error', error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);

  // const handleProfileEdit = useCallback(async () => {
  //   console.log(user?.id);

  //   if (!user) return;

  //   if (admin.prefecture === '' || admin.group === '' || admin.password === '') {
  //     toast.error('入力されていない項目があります');
  //   } else {
  //     const { data, error } = await supabase
  //       .from('admins')
  //       .update({
  //         avatar_url: admin.avatar_url,
  //         prefecture: admin.prefecture,
  //         group: admin.group,
  //         email: admin.email,
  //         password: admin.password,
  //       })
  //       .eq('id', user.id);
  //     if (error) {
  //       alert(error);
  //     }
  //     console.log({ data, error });

  //     toast.success('プロフィールが更新されました', {
  //       duration: 3000,
  //     });
  //   }
  // }, [admin.prefecture, admin.group, admin.email, admin.password, user]);

  if (loading) {
    return (
      <div className='flex justify-center mt-64'>
        <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
      </div>
    );
  }
  if (error) {
    return <div>エラーが発生しました。</div>;
  }

  return (
    <>
      <div className='flex bg-gray-100 h-full'>
        <Sidebar group={''} />
        <div className='bg-gray-200 h-full ml-auto mr-auto my-20 px-6 sm:px-32 overflow-hidden shadow-lg'>
          <h1 className='text-3xl mt-24'>プロフィール編集</h1>
          <button onClick={() => setGroup(group + '1')}>test</button>
          <form onSubmit={form.onSubmit((values) => {
            console.log("submit", values)
            setAdmins({ ...admins, ...values })
          })}>
            {/* <div className='pt-5 mt-5'>
              <p className='text-sm mt-2'>
                {avatar ? (
                  <Avatar url={avatar} size={60} />
                ) : (
                  <img
                    src='/icons/profile-icon.png'
                    alt='image'
                    className='w-17 h-16 pr-4 rounded-full'
                  />
                )}
                <UploadButton onUpload={uploadAvatar} loading={uploading} />
              </p>
            </div> */}
            <label htmlFor='prefecture' className='flex justify-start pt-10 pb-3'>
              都道府県
            </label>
            <TextInput
              // value={admin.prefecture}
              // onChange={(e) => {
              //   setAdmin({ ...admin, prefecture: e.target.value.trim() });
              // }}
              {...form.getInputProps('prefecture')}
              placeholder='山形県'
              classNames={{ 'input': 'w-full p-2 rounded-l-md' }}
            />
            <label htmlFor='group' className='flex justify-start pt-10 pb-3'>
              自治体
            </label>
            <TextInput
              // value={admin.group}
              // onChange={(e) => {
              //   setAdmin({ ...admin, group: e.target.value.trim() });
              // }}
              {...form.getInputProps('group')}
              placeholder='遊佐町役場'
              classNames={{ 'input': 'w-full p-2 rounded-l-md' }}
            />
            <label htmlFor='email' className='flex justify-start pt-10 pb-3'>
              メールアドレス
            </label>
            <TextInput
              // value={admin.email}
              // onChange={(e) => {
              //   setAdmin({ ...admin, email: e.target.value.trim() });
              // }}
              {...form.getInputProps('email')}
              placeholder='reco-spo@gmail.com'
              classNames={{ 'input': 'w-full p-2 rounded-l-md' }}
            />
            <label htmlFor='password' className='flex justify-start pt-10 pb-3'>
              パスワード
            </label>
            <TextInput
              // value={admin.password}
              // onChange={(e) => {
              //   setAdmin({ ...admin, password: e.target.value.trim() });
              // }}
              {...form.getInputProps('password')}
              placeholder='test1234'
              classNames={{ 'input': 'w-full p-2 rounded-l-md' }}
            />
            {/* <div className='text-center pb-10'>
              <Link href='/admins' passHref>
                <button
                  onClick={handleProfileEdit}
                  className=' px-4 py-2 mt-10 mx-6 text-white bg-blue-300 rounded-lg'
                >
                  変更
                </button>
              </Link>
            </div> */}
            <div className='text-center pb-10'>
              <Button type="submit" classNames={{ 'root': 'px-4 py-2 mt-10 mx-6 text-white bg-blue-300 rounded-lg' }}>
                変更
              </Button>
            </div>
          </form>
          <Toaster />
        </div>
      </div >
    </>
  );
};

export default ProfileEdit;
