import { useRouter } from 'next/router';
import type { VFC } from 'react';
import Link from 'next/link';
import { Sidebar } from 'src/components/layout/Sidebar';
import { supabase } from 'src/libs/supabase';
import useAuth from 'src/hooks/useAuth';
import { useCallback, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useFileUpload } from 'use-file-upload';
import type { Signin } from 'src/types/signin';
import { ProfileEditForm } from 'src/components/Admin/ProfileEdit';
// import Avatar from 'src/components/Photo/PhotoUpload';

const ProfileEdit: VFC = () => {
  // const [image, setImage] = useState('');
  // const [avatar_url, setAvatarUrl] = useState<string>('');
  const [prefecture, setPrefecture] = useState<string>('');
  const [group, setGroup] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const router = useRouter();
  const session = useAuth(true);
  const user = supabase.auth.user();

  console.log({ user, session });

  const handleProfileEdit = useCallback(async () => {
    console.log(user?.id);

    if (!user) return;

    if (prefecture === '' || group === '' || password === '') {
      toast.error('入力されていない項目があります');
    } else {
      const { data, error } = await supabase
        .from('admins')
        .update({
          // avatar_url: avatar_url,
          prefecture: prefecture,
          group: group,
          email: email,
          password: password,
        })
        .eq('id', user.id);
      if (error) {
        alert(error);
      }
      console.log({ data, error });

      toast.success('プロフィールが更新されました', {
        duration: 3000,
      });
    }
  }, [prefecture, group, email, password, user]);

  // const defaultSrc =
  //   'https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png';

  // const [files, selectFiles] = useFileUpload();

  return (
    <>
      <ProfileEditForm
        group={group}
        prefecture={prefecture}
        email={email}
        password={password}
        setPrefecture={setPrefecture}
        setGroup={setGroup}
        setEmail={setEmail}
        setPassword={setPassword}
        handleProfileEdit={handleProfileEdit}
      />
    </>
  );
};

export default ProfileEdit;
