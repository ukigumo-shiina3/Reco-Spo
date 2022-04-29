import { useEffect, useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import { adminsState } from '../atom';
import {
  adminIdState,
  avatarUrlState,
  emailState,
  groupState,
  passwordState,
  prefectureState,
} from '../selector';
import { supabase } from 'src/libs/supabase';
import { Admin } from 'src/types/admin';

export const useRecoil = () => {
  const [loading, setLoading] = useState(false);
  const [errorState, setErrorState] = useState(null);
  const [admins, setAdmins] = useRecoilState(adminsState);
  const [adminId, setAdminId] = useRecoilState(adminIdState);
  const [avatarUrl, setAvatarUrl] = useRecoilState(avatarUrlState);
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [prefecture, setPrefecture] = useRecoilState(prefectureState);
  const [group, setGroup] = useRecoilState(groupState);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const user = supabase.auth.user();

        const { data, error } = await supabase
          .from<Admin>('admins')
          .select('*')
          .eq('id', user?.id || '')
          .single();

        if (error) {
          throw error;
        }
        console.log('useRecoil:', data);
        setAdmins((prev) => {
          return {
            avatar_url: data.avatar_url,
            email: data.email,
            id: data.id,
            password: data.password,
            prefecture: data.prefecture,
            group: data.group,
          };
        });
      } catch (error) {
        console.log('error', error.message);
        setErrorState(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [setAdmins]);

  return useMemo(() => {
    return {
      loading,
      errorState,
      admins,
      adminId,
      avatarUrl,
      email,
      password,
      prefecture,
      group,
      setAdmins,
      setAdminId,
      setAvatarUrl,
      setEmail,
      setPassword,
      setPrefecture,
      setGroup,
    };
  }, [
    loading,
    errorState,
    admins,
    adminId,
    avatarUrl,
    email,
    password,
    prefecture,
    group,
    setAdmins,
    setAdminId,
    setAvatarUrl,
    setEmail,
    setPassword,
    setPrefecture,
    setGroup,
  ]);
};
