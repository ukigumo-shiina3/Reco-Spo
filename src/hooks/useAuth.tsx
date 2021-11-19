import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from 'src/libs/supabase';

const useAuth = (requiresAuth: boolean) => {
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();

  useEffect(() => {
    console.group('useAuth');
    console.log('requiresAuth: ', requiresAuth);
    const authSession = supabase.auth.session();
    console.log('authSession: ', authSession);

    setSession((prev) => {
      console.log(prev);
      return authSession !== prev ? authSession : prev;
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      console.log('session: ', session);
      setSession(session);
      if (requiresAuth && !session) router.push('/admins/signin');
    });
    console.groupEnd();
    return () => {
      authListener.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (requiresAuth && session) router.push('/admins');
    console.log(session);
  }, [session]);

  return session;
};

export default useAuth;
