import { NextPage } from 'next';
import { SpotCard } from 'src/components/Spot/SpotCard';
import { SpotPagination } from 'src/components/Spot/SpotPagination';
import { UserLayout } from 'src/components/layout/UserLayout';

const Spots: NextPage = () => {
  return (
    <UserLayout>
      <SpotCard />
      <SpotPagination />
    </UserLayout>
  );
};

export default Spots;
