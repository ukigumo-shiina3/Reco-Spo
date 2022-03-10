import { NextPage } from 'next';
import { AdminSignup } from 'src/components/Admin/AdminSignup';
import useAuth from 'src/hooks/useAuth';

const Signup: NextPage = () => {
  const session = useAuth(true);
  return <AdminSignup title={'新規登録'} button={'新規登録'} session={session} />;
};

export default Signup;
