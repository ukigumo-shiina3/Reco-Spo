import { NextPage } from 'next';
import { AdminSignin } from 'src/components/Admin/AdminSignin';
import useAuth from 'src/hooks/useAuth';

const Signin: NextPage = () => {
  const session = useAuth(true);
  return (
    <AdminSignin session={session} title='ログイン' button='ログイン' email={''} password={''} />
  );
};

export default Signin;
