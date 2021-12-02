import { NextPage } from 'next';
import { Footer } from 'src/components/layout/Footer';
import { Header } from 'src/components/layout/Header';
import { SpotCard } from 'src/components/Spot/SpotCard';
import { SpotPagination } from 'src/components/Spot/SpotPagination';

const Spots: NextPage = () => {
  return (
    <>
      <Header />
      <SpotCard />
      <SpotPagination />
      <Footer />
    </>
  );
};

export default Spots;
