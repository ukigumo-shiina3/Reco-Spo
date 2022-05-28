/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { DEFAULT_SPOTS_BUCKET } from 'src/libs/regular';
import { supabase } from 'src/libs/supabase';
import { SpotEdit } from 'src/types/spotEdit';

type Type = () => {
  uploadSpot: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  spotDownloadUrl: string;
  update: (values: SpotEdit) => Promise<void>;
  uploading: boolean;
};

// TODO: 引数にspotテーブルのデータを指定する
export const useSpotImage: Type = () => {
  const [spotEdit, setSpotEdit] = useState<SpotEdit>({
    id: '',
    prefecture_id: '',
    prefectures: {
      prefectures_name: [],
    },
    system_id: '',
    systems: {
      systems_name: [],
    },
    name: '',
    title: '',
    image_url: '',
    appeal: '',
    area: '',
    link: '',
    target_person: '',
    usage_fee: '',
    term: '',
    postal_code: '',
    address: '',
    manager: '',
    tel: '',
    email: '',
  });

  const [uploading, setUploading] = useState<boolean>(false);
  const [spotUrl, setSpotUrl] = useState<string>('');
  const [spotDownloadUrl, setSpotDownloadUrl] = useState<string>('');
  const update = useCallback(
    async (values: SpotEdit) => {
      if (!spotEdit?.id) {
        return;
      }
      setUploading(true);
      let dataSet = {
        id: values.id,
        admin_id: values.admin_id,
        prefecture_id: values.prefecture_id,
        prefectures: {
          prefectures_name: values.prefectures,
        },
        system_id: values.system_id,
        systems: {
          systems_name: values.systems,
        },
        name: values.name,
        title: values.title,
        image_url: values.image_url,
        appeal: values.appeal,
        area: values.area,
        link: values.link,
        target_person: values.target_person,
        usage_fee: values.usage_fee,
        term: values.term,
        postal_code: values.postal_code,
        address: values.address,
        manager: values.manager,
        tel: values.tel,
        email: values.email,
      };

      const { error } = await supabase.from('spots').update(dataSet).eq('id', values.id);
      if (error) {
        toast.error(error.message);
      }
      // console.log('updata'{ data, error });

      // setSpotEdit(dataSet);
      setUploading(false);

      toast.success('プロフィールが更新されました', {
        duration: 3000,
      });
    },
    [spotEdit],
  );

  const uploadSpot = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
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
          .from(DEFAULT_SPOTS_BUCKET)
          .upload(filePath, file);

        if (uploadError) {
          throw uploadError;
        }

        const { error: updateError } = await supabase
          .from('spots')
          .update({
            avatar_url: filePath,
          })
          .eq('id', user?.id || '');

        if (updateError) {
          throw updateError;
        }

        setSpotUrl(filePath);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setUploading(false);
      }
    },
    [setSpotUrl],
  );

  const getSpotEdit = useCallback(async (url) => {
    if (!url) {
      setSpotDownloadUrl('');
      return;
    }
    try {
      const { data, error } = await supabase.storage.from(DEFAULT_SPOTS_BUCKET).download(url);
      if (error) {
        throw error;
      }
      if (data == null) {
        setSpotDownloadUrl('');
        return;
      }
      setSpotDownloadUrl(URL.createObjectURL(data));
      return;
    } catch (error) {
      toast.error(error.message);
      setSpotDownloadUrl('');
      return;
    }
  }, []);

  useEffect(() => {
    if (spotUrl) {
      getSpotEdit(spotUrl);
    }
  }, [spotUrl, getSpotEdit]);

  return useMemo(() => {
    return {
      uploadSpot,
      spotDownloadUrl,
      update,
      uploading,
    };
  }, [uploadSpot, spotDownloadUrl, update, uploading]);
};
