import { NextPage } from 'next';
import { SpotContact } from 'src/components/Admin/SpotContact';
import { SpotDetail } from 'src/components/Admin/SpotDetail';
import { SpotExplain } from 'src/components/Admin/SpotExplain';
import { SpotImage } from 'src/components/Admin/SpotIImage';
import { SpotInfo } from 'src/components/Admin/SpotInfo';
import { Sidebar } from 'src/components/layout/Sidebar';

const SpotsPost: NextPage = () => {
  return (
    <div>
      <div className='flex bg-gray-100 h-full'>
        <Sidebar />
        <div className='bg-gray-200 h-full ml-auto mr-auto my-20 px-6 flex-1rounded overflow-hidden shadow-lg md:px-8'>
          <SpotImage />
          <SpotInfo />
          <SpotExplain />
          <SpotDetail />
          <SpotContact />
        </div>
      </div>
    </div>
  );
};

export default SpotsPost;
