/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, VFC } from 'react';
import { Toaster } from 'react-hot-toast';
import UploadButton from 'src/components/Button/UploadButton/AdminUploadButton';
import Avatar from 'src/components/Avatar';
import { Spinner } from '@chakra-ui/react';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';
import { Button, TextInput } from '@mantine/core';
import { useRecoil } from 'src/recoil/hooks';
import { useAdminImage } from 'src/hooks/useAdminImage';
import { AdminInfoLayout } from 'src/components/Layout/AdminInfoLayout';

const schema = z.object({
  email: z.string().email({ message: '有効なメールアドレスを入力してください！' }),
  password: z.string().min(2, { message: 'パスワード は2文字以上の値で入力してください！' }),
  prefecture: z
    .string()
    .min(2, { message: '都道府県 は2文字以上の値で入力してください！' })
    .regex(/^.*?(都|道|府|県)$/, { message: '正しい都道府県名を入力してください！' }),
  group: z.string().min(2, { message: '自治体 名 は2文字以上の値で入力してください！' }),
});

const ProfileEdit: VFC = () => {
  const { admins, loading } = useRecoil();
  const { uploading, uploadAvatar, avatarDownloadUrl, update } = useAdminImage();
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      avatar_url: admins.avatar_url,
      email: admins.email,
      password: admins.password,
      prefecture: admins.prefecture,
      group: admins.group,
    },
  });

  useEffect(() => {
    form.setValues({
      ...form,
      avatar_url: admins.avatar_url,
      email: admins.email,
      password: admins.password,
      prefecture: admins.prefecture,
      group: admins.group,
    });
  }, [admins]);

  if (loading) {
    return (
      <div className='flex justify-center mt-64'>
        <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
      </div>
    );
  }

  return (
    <>
      <AdminInfoLayout>
        <h1 className='font-bold text-3xl mt-12'>プロフィール編集</h1>
        <div className='h-full my-10 px-12 overflow-hidden shadow-lg bg-white'>
          <form
            onSubmit={form.onSubmit((values) => {
              console.log(values);
              update({ id: admins.id, ...form.values });
            })}
          >
            {/* <form> */}
            <div className='flex justify-start pt-5 mt-5'>
              <div className='flex flex-col justify-center items-center text-sm mt-2'>
                <Avatar url={avatarDownloadUrl} dummyImageUrl='/icons/profile-icon.png' size={80} />
                <UploadButton onUpload={uploadAvatar} loading={uploading} />
              </div>
            </div>
            <label htmlFor='prefecture' className='flex justify-start pt-10 pb-3'>
              都道府県
            </label>
            <TextInput
              required
              id='prefecture'
              placeholder='山形県'
              classNames={{ input: 'w-64 sm:w-96 p-2 rounded-l-md' }}
              {...form.getInputProps('prefecture')}
            />
            <label htmlFor='group' className='flex justify-start pt-10 pb-3'>
              自治体
            </label>
            <TextInput
              required
              id='group'
              placeholder='遊佐町役場'
              classNames={{ input: 'w-64 sm:w-96 p-2 rounded-l-md' }}
              {...form.getInputProps('group')}
            />
            <label htmlFor='email' className='flex justify-start pt-10 pb-3'>
              メールアドレス
            </label>
            <TextInput
              required
              id='email'
              autoComplete='email'
              placeholder='reco-spo@gmail.com'
              classNames={{ input: 'w-64 sm:w-96 p-2 rounded-l-md' }}
              {...form.getInputProps('email')}
            />
            <label htmlFor='password' className='flex justify-start pt-10 pb-3'>
              パスワード
            </label>
            <TextInput
              required
              id='password'
              type='password'
              autoComplete='current-password'
              placeholder='test1234'
              classNames={{ input: 'w-64 sm:w-96 p-2 rounded-l-md' }}
              {...form.getInputProps('password')}
            />

            <div className='text-center pb-10'>
              <Button
                type='submit'
                classNames={{ root: 'px-4 py-2 mt-10 mx-6 text-white bg-blue-300 rounded-lg' }}
              >
                変更
              </Button>
            </div>
          </form>
          <Toaster />
        </div>
      </AdminInfoLayout>
    </>
  );
};

export default ProfileEdit;
