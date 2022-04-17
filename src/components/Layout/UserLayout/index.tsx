import { Header } from 'src/components/Layout/Header';
import { Footer } from 'src/components/Layout/Footer';
import { VFC } from 'react';
import { MantineProvider } from '@mantine/core';

type Props = {
  children: React.ReactNode;
};

export const UserLayout: VFC<Props> = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
