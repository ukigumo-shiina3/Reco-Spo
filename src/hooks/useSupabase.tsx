import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { DEFAULT_AVATARS_BUCKET } from "src/libs/constant";
import { supabase } from "src/libs/supabase";
import { useRecoil } from "src/recoil/hooks";
import { Admin } from "src/types/admin";

type Type = () => {
  uploadAvatar: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  avatarDownloadUrl: string;
  update: (values: Admin) => Promise<void>;
  uploading: boolean;
}

export const useSupabase: Type = () => {
  const { admins, avatarUrl, setAvatarUrl, setAdmins } = useRecoil();
  const [uploading, setUploading] = useState<boolean>(false);
  const [avatarDownloadUrl, setAvatarDownloadUrl] = useState<string>('');
  const update = useCallback(async (values: Admin) => {
    if (!admins?.id) { return }
    setUploading(true);
    let dataSet = {
      ...admins,
      avatar_url: values.avatar_url,
      email: values.email,
      password: values.password,
      prefecture: values.prefecture,
      group: values.group
    }

    const { error } = await supabase
      .from('admins')
      .update(dataSet)
      .eq('id', admins.id);
    if (error) {
      toast.error(error.message);
    }
    // console.log('updata'{ data, error });

    setAdmins(dataSet);
    setUploading(false);

    toast.success('プロフィールが更新されました', {
      duration: 3000,
    });
  }, [admins, setAdmins]);
  const uploadAvatar = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length == 0) {
        throw '変更するプロフィール画像を選択してください';
      }

      const user = supabase.auth.user();
      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { data, error: uploadError } = await supabase.storage
        .from(DEFAULT_AVATARS_BUCKET)
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { error: updateError } = await supabase
        .from('admins')
        .update({
          avatar_url: filePath,
        })
        .eq('id', user?.id || '');

      if (updateError) {
        throw updateError;
      }

      setAvatarUrl(filePath);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setUploading(false);
    }
  }, [setAvatarUrl]);

  // const getAvatar = useCallback(async (url) => {
  //   if (!url) {
  //     setAvatarDownloadUrl('');
  //     return
  //   }
  //   try {
  //     const { data, error } = await supabase.storage.from(DEFAULT_AVATARS_BUCKET).download(url);
  //     if (error) {
  //       throw error;
  //     }
  //     console.log("getAvatar", data);
  //     if (data == null) {
  //       setAvatarDownloadUrl('');
  //       return
  //     }
  //     setAvatarDownloadUrl(URL.createObjectURL(data));
  //     return;
  //   } catch (error) {
  //     toast.error(error.message);
  //     setAvatarDownloadUrl('');
  //     return;
  //   }
  // }, []);

  // useEffect(() => {
  //   if (!avatarUrl) {
  //     getAvatar(avatarUrl);
  //   }
  // }, [avatarUrl, getAvatar])
  // console.log("useSupabase => avatarDownloadUrl", avatarDownloadUrl);

  return useMemo(() => {
    return {
      uploadAvatar,
      avatarDownloadUrl,
      update,
      uploading
    }
  }, [uploadAvatar, avatarDownloadUrl, update, uploading])
}