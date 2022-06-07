import { VFC } from 'react';
import Link from 'next/link';
import Avatar from 'src/components/Avatar';
import { useAdminImage } from 'src/hooks/useAdminImage';

type Props = {
  children: React.ReactNode;
};

export const AdminInfoLayout: VFC<Props> = (props) => {
  const { avatarDownloadUrl } = useAdminImage();
  return (
    <div>
      <div className='w-full bg-white flex'>
        <Link href='/' passHref>
          <a className='block font-fancy font-bold text-4xl m-8'>Reco Spo</a>
        </Link>
        <div className='absolute right-8 top-5'>
          <Avatar url={avatarDownloadUrl} dummyImageUrl='/icons/profile-icon.png' size={70} />
        </div>
      </div>
      <div className='flex justify-center items-center h-screen bg-blue-50'>
        <div className='flex flex-col w-full justify-center items-center'>{props.children}</div>
      </div>
    </div>
  );
};
