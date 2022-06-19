/* eslint-disable @next/next/no-img-element */
type checkFuncType = (path: string) => Promise<void> | void | null;

export default function Avatar({
  url,
  dummyImageUrl,
  size,
}: {
  url: string | null;
  dummyImageUrl?: string | null;
  size: number;
}) {
  if (!url) {
    if (dummyImageUrl) {
      return (
        <img
          src={dummyImageUrl}
          alt='avatar'
          className='rounded-full mb-2'
          style={{ height: size, width: size }}
        />
      );
    } else {
      return <div className='avatar no-image' style={{ height: size, width: size }} />;
    }
  }

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      src={url}
      alt='avatar'
      className='rounded-full mb-2'
      style={{ height: size, width: size }}
    />
  );
}
