import { Header } from 'src/components/layout/Header';
import { Footer } from 'src/components/layout/Footer';
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
