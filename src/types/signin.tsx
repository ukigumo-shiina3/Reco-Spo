import { Session } from '@supabase/supabase-js';

export type Signin = {
  title: string;
  signinButton: string;
  testSigninButton: string;
  email: string;
  password: string;
  session: Session | null;
};
