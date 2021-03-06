/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

export default function SpotImage({
  url,
  dummyImageUrl,
  size,
}: {
  url: string | null;
  dummyImageUrl?: string | null;
  size: number;
}) {
  const [spotUrl, setSpotUrl] = useState<string | null>(null);

  if (!url) {
    if (dummyImageUrl) {
      return (
        <img
          src={dummyImageUrl}
          alt='spot-image'
          className='m-auto mt-3 w-8 h-8'
          style={{ height: size, width: size }}
        />
      );
    } else {
      return <div className='spot-image no-image' style={{ height: size, width: size }} />;
    }
  }

  return spotUrl ? (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img src={spotUrl} className='mt-6' style={{ height: size, width: size }} />
  ) : (
    <div className='spot no-image' style={{ height: size, width: size }} />
  );
}
