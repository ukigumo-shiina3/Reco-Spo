type Props = {
  children: React.ReactNode;
};

export const AdminAuthLayout = (props: Props) => {
  return <div className='flex h-screen'>{props.children}</div>;
};
