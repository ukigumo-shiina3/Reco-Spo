/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { supabase } from 'src/libs/supabase';
import { DEFAULT_AVATARS_BUCKET } from 'src/libs/constant';

export default function Avatar({ url, size }: { url: string | null; size: number }) {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage.from(DEFAULT_AVATARS_BUCKET).download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error) {
      console.log('Error downloading image: ', error.message);
    }
  }

  return avatarUrl ? (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img src={avatarUrl} className='rounded-full mb-2' style={{ height: size, width: size }} />
  ) : (
    <div className='avatar no-image' style={{ height: size, width: size }} />
  );
}
