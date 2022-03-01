import { Header } from 'src/components/Layout/Header';
import { Footer } from 'src/components/Layout/Footer';
import { VFC } from 'react';

type Props = {
  children: React.ReactNode;
};

export const UserLayout: VFC<Props> = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
