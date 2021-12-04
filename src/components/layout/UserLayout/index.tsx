import { Header } from 'src/components/layout/Header';
import { Footer } from 'src/components/layout/Footer';

type Props = {
  children: React.ReactNode;
};

export const UserLayout = (props: Props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
