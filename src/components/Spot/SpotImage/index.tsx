/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { supabase } from 'src/libs/supabase';
import { DEFAULT_SPOTS_BUCKET } from 'src/libs/regular';

export default function SpotImage({ url, size }: { url: string | null; size: number }) {
  const [spotUrl, setSpotUrl] = useState<string | null>(null);

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage.from(DEFAULT_SPOTS_BUCKET).download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setSpotUrl(url);
    } catch (error) {
      console.log('Error downloading image: ', error.message);
    }
  }

  return spotUrl ? (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img src={spotUrl} className='rounded-full mb-2' style={{ height: size, width: size }} />
  ) : (
    <div className='spot no-image' style={{ height: size, width: size }} />
  );
}