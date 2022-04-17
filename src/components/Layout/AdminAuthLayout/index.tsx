import { VFC } from 'react';

type Props = {
  children: React.ReactNode;
};

export const AdminAuthLayout: VFC<Props> = (props) => {
  return <div className='flex h-screen'>{props.children}</div>;
};
