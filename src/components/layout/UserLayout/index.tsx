import { Header } from 'src/components/Layout/Header';
import { Footer } from 'src/components/Layout/Footer';
import { useCallback, useEffect, useState, VFC } from 'react';

type Props = {
  children: React.ReactNode;
};

export const UserLayout: VFC<Props> = (props) => {
  const [loading, setLoading] = useState<boolean>(true);

  const handleLoading = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    handleLoading();
  }, [handleLoading]);

  return (
    <div>
      {/* {loading ? null : ( */}
      <Header />
      {props.children}
      <Footer />
      {/* )}   */}
    </div>
  );
};
