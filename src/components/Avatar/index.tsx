/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useState } from 'react';
import { supabase } from 'src/libs/supabase';
import { DEFAULT_AVATARS_BUCKET } from 'src/libs/constant';

type checkFuncType = (path: string) => Promise<void> | void | null;

export default function Avatar({ url, size }: { url: string | null; size: number }) {
  // const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  // const downloadImage = useCallback(async (path: string) => {
  //   try {
  //     const { data, error } = await supabase.storage.from(DEFAULT_AVATARS_BUCKET).download(path);
  //     if (error) {
  //       throw error;
  //     }
  //     if (data == null) { return }
  //     const url = URL.createObjectURL(data);
  //     setAvatarUrl(url);
  //   } catch (error) {
  //     console.log('Error downloading image: ', error.message);
  //   }
  //   return
  // }, []);

  // useEffect(() => {
  //   if (url) {
  //     downloadImage(url);
  //   }
  //   return () => {
  //     if (avatarUrl) {
  //       URL.revokeObjectURL(avatarUrl);
  //     }
  //   }
  // }, [avatarUrl, downloadImage, url]);



  return url ? (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img src={url} className='rounded-full mb-2' style={{ height: size, width: size }} />
  ) : (
    <div className='avatar no-image' style={{ height: size, width: size }} />
  );
}
