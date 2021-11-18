import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ProfileEdit } from 'src/components/Admin/ProfileEdit';
import { Sidebar } from 'src/components/layout/Sidebar';
import { supabase } from 'src/libs/supabase';
import { Session } from '@supabase/supabase-js';
import useAuth from 'src/hooks/useAuth';

const AdminTop = () => {
  const router = useRouter();
  const session = useAuth(true);
  const user = supabase.auth.user();

  console.log({ user, session });

  const HandleLogout = () => {
    supabase.auth.signOut();
  };

  const HandleRename = async () => {
    console.log(user.id);

    if (!user) return;
    const { data, error } = await supabase
      .from('admins')
      .update({ name: 'test' })
      .eq('id', user.id);
    console.log({ data });

    window.alert('登録完了！');
  };

  return (
    <div>
      <div className='flex h-full bg-gray-200'>
        <Sidebar />
        <div className='bg-white h-full ml-auto mr-auto my-20 px-6 overflow-hidden shadow-lg md:w-96'>
          <ProfileEdit />

          <button onClick={HandleRename}>名前登録</button>
          <button onClick={HandleLogout}>ログアウト</button>
        </div>
      </div>
    </div>
  );
};

export default AdminTop;
