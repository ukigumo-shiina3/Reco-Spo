import { NextPage } from 'next';
import { AdminSignup } from 'src/components/Admin/AdminSignup';

const Signup: NextPage = () => {
  return <AdminSignup title={'新規登録'} button={'新規登録'} />;
};

export default Signup;
