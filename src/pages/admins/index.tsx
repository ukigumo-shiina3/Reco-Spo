import { useRouter } from 'next/router';
import type { VFC } from 'react';
import { supabase } from 'src/libs/supabase';
import useAuth from 'src/hooks/useAuth';
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useFileUpload } from 'use-file-upload';
import { ProfileEditForm } from 'src/components/Admin/ProfileEdit';
import { Admin } from 'src/types/admin';
// import Avatar from 'src/components/Photo/PhotoUpload';

const ProfileEdit: VFC = () => {
  // const [avatar_url, setAvatarUrl] = useState<string>('');

  const [admin, admin] = useState<Admin>({
    email: '',
    password: '',
    prefecture: '',
    group: '',
    setPrefecture: (prefecture: string) => {},
    setGroup: (group: string) => {},
    setEmail: (email: string) => {},
    setPassword: (password: string) => {},
    handleProfileEdit: () => {},
  });

  const router = useRouter();
  const session = useAuth(true);
  const user = supabase.auth.user();

  console.log({ user, session });

  const handleProfileEdit = useCallback(async () => {
    console.log(user?.id);

    if (!user) return;

    if (admin.prefecture === '' || admin.group === '' || admin.password === '') {
      toast.error('入力されていない項目があります');
    } else {
      const { data, error } = await supabase
        .from('admins')
        .update({
          // avatar_url: avatar_url,
          prefecture: admin.prefecture,
          group: admin.group,
          email: admin.email,
          password: admin.password,
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
  }, [admin.prefecture, admin.group, admin.email, admin.password, user]);

  // const defaultSrc =
  //   'https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png';

  // const [files, selectFiles] = useFileUpload();

  return (
    <>
      <ProfileEditForm
        group={admin.group}
        prefecture={admin.prefecture}
        email={admin.email}
        password={admin.password}
        setPrefecture={admin.setPrefecture}
        setGroup={admin.setGroup}
        setEmail={admin.setEmail}
        setPassword={admin.setPassword}
        handleProfileEdit={admin.handleProfileEdit}
      />
    </>
  );
};

export default ProfileEdit;
