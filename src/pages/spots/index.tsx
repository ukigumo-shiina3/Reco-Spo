import { NextPage } from 'next';
import { SpotCard } from 'src/components/Spot/SpotCard';
import { SpotPagination } from 'src/components/Spot/SpotPagination';
import { UserLayout } from 'src/components/layout/UserLayout';
import { SearchButton } from 'src/components/Button/SearchButton';

const Spots: NextPage = () => {
  return (
    <UserLayout>
      <SearchButton />
      <SpotCard />
      <SpotPagination />
    </UserLayout>
  );
};

export default Spots;
