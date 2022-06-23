/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { supabase } from 'src/libs/supabase';
import { useCallback } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { NextPage } from 'next';
import { Session } from '@supabase/supabase-js';
import { Spot } from 'src/types/spot';
import { SpotEdit } from 'src/types/spotEdit';
import { Spinner } from '@chakra-ui/react';
import { useSpot, useUser } from 'src/hooks/useSpotEditSelect';
import { Select } from '@mantine/core';
import { PrefecturesCreatedAt } from 'src/types/prefecturesCreatedAt';
import { getPrefecturesCreatedAt } from 'src/hooks/usePrefecturesCreatedAtSelect';
import { DEFAULT_SPOTS_BUCKET } from 'src/libs/regular';
import SpotUploadButton from 'src/components/Button/UploadButton/SpotUploadButton';
import { getSystemsCreatedAt } from 'src/hooks/useSystemssCreatedAtSelect';
import { SystemsCreatedAt } from 'src/types/systemsCreatedAt';
import { useSpotImage } from 'src/hooks/useSpotImage';
import SpotImage from 'src/components/Spot/SpotImage';
import { AdminInfoLayout } from 'src/components/Layout/AdminInfoLayout';

const user = supabase.auth.user();

const SpotsEdit: NextPage<Spot> = () => {
  const { adminId } = useUser();
  const { spotList: spot, getSpotsData } = useSpot(adminId);

  const [spotEdit, setSpotEdit] = useState<SpotEdit>({
    id: '',
    admin_id: '',
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

  const [prefecturesCreatedAt, setPrefecturesCreatedAt] = useState<PrefecturesCreatedAt[]>([]);
  const [systemsCreatedAt, setSystemsCreatedAt] = useState<SystemsCreatedAt[]>([]);
  const [spotImage, setSpotImage] = useState<string | null>('');
  const [session, setSession] = useState<Session | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState(false);
  const { uploadSpot, spotDownloadUrl, update } = useSpotImage();

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event: string, session: Session | null) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    getSpotImgae();
  }, []);

  function setImage(spotImage: any) {
    if (!spotImage) {
      return;
    }
    setSpotImage(spotImage.image_url);
  }

  const getSpotImgae = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error } = await supabase.from<Spot>('spots').select('image_url');
      // console.log('ユーザーアイディ', user?.id);
      // console.log('スポットデータ', data);

      if (error) {
        throw error;
      }

      setImage(data);
    } catch (error) {
      console.log('エラー', error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchPrefecturesCreatedAt = useCallback(async () => {
    try {
      const data = await getPrefecturesCreatedAt();
      setPrefecturesCreatedAt(data);
      // console.log('都道府県作成日', data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, [setPrefecturesCreatedAt]);

  useEffect(() => {
    fetchPrefecturesCreatedAt();
  }, [user, fetchPrefecturesCreatedAt]);

  const fetchSystemsdCreatedAt = useCallback(async () => {
    try {
      const data = await getSystemsCreatedAt();
      setSystemsCreatedAt(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, [setSystemsCreatedAt]);

  useEffect(() => {
    fetchSystemsdCreatedAt();
  }, [user, fetchSystemsdCreatedAt]);

  // マンタインのセレクトボックスを使うために必要な値をspotから抽出
  const getSpotIndex = spot?.map((spot, i) => {
    return {
      value: String(i),
      label: spot.name,
    };
  });
  // spotのINDEXを取得する関数
  const [spotIndex, setSpotIndex] = useState<string | null>('0');

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
    },
    [setFiles],
  );

  const handleSpotEdit = useCallback(async () => {
    setUploading(true);

    if (!files || files.length == 0) {
      throw '変更するスポット画像を選択してください';
    }
    const file = files[0];
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from(DEFAULT_SPOTS_BUCKET)
      .upload(filePath, file);

    if (uploadError) {
      throw uploadError;
    }

    const { data, error } = await supabase
      .from('spots')
      .update({
        admin_id: user?.id,
        prefecture_id: spotEdit.prefecture_id,
        system_id: spotEdit.system_id,
        name: spotEdit.name,
        title: spotEdit.title,
        image_url: filePath,
        appeal: spotEdit.appeal,
        area: spotEdit.area,
        link: spotEdit.link,
        target_person: spotEdit.target_person,
        usage_fee: spotEdit.usage_fee,
        term: spotEdit.term,
        postal_code: spotEdit.postal_code,
        address: spotEdit.address,
        manager: spotEdit.manager,
        tel: spotEdit.tel,
        email: spotEdit.email,
        updated_at: new Date().toISOString(),
      })
      .eq('id', spotEdit.id)
      .single();
    console.log({ data, error });

    toast.success('スポットを編集しました', {});
    // spotdataを再度取得
    getSpotsData();
    //  表示するINDEXを０番に設定(編集されたスポットが表示されるようにする)
    setSpotIndex('0');
  }, [
    user,
    spotEdit.prefecture_id,
    spotEdit.system_id,
    spotEdit.name,
    spotEdit.title,
    spotEdit.image_url,
    spotEdit.appeal,
    spotEdit.area,
    spotEdit.link,
    spotEdit.target_person,
    spotEdit.usage_fee,
    spotEdit.term,
    spotEdit.postal_code,
    spotEdit.address,
    spotEdit.manager,
    spotEdit.tel,
    spotEdit.email,
  ]);

  useEffect(() => {
    if (spot !== null) {
      // 編集フォームに入れるspotdataをセレクトボックスで取得した番号から取得
      setSpotEdit(spot[Number(spotIndex)]);
    }
  }, [spotIndex, spot]);

  if (loading) {
    return (
      <div className='flex justify-center mt-64'>
        <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
      </div>
    );
  }
  if (error) {
    return <div>エラーが発生しました。</div>;
  }

  if (user) {
    return (
      <>
        <AdminInfoLayout>
          <h1 className='font-bold text-3xl pt-12'>スポット編集</h1>
          <div className='h-full my-10 px-6 sm:px-12 md:px-16 overflow-hidden shadow-lg bg-white'>
            {/* 編集するスポットのセレクトボックス */}
            <div className='mt-12'>
              {spot != null && getSpotIndex !== undefined ? (
                <Select
                  label='編集するスポットを選択してください'
                  value={spotIndex}
                  onChange={setSpotIndex}
                  data={getSpotIndex}
                />
              ) : null}
            </div>
            {/* スポット画像 */}
            <h2 className='flex mt-8'>スポット画像(最大5枚)</h2>
            <div className='flex flex-wrap items-end'>
              <div className='flex flex-wrap gap-2 mt-5 sm:gap-6'>
                <div className='flex justify-start'>
                  <div className='flex flex-wrap gap-2 mt-5 sm:gap-6'>
                    <div className='bg-white w-16 h-16 border-2 border-gray-400'>
                      <SpotImage
                        url={spotDownloadUrl}
                        dummyImageUrl='/icons/camera-icon.png'
                        size={40}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {files && files.length > 0
                ? files.map((file, index) => (
                    <div key={index} className='py-2 px-1'>
                      <img
                        src={URL.createObjectURL(file)}
                        style={{ height: index === 0 ? 90 : 60, width: index === 0 ? 90 : 60 }}
                        alt='スポットイメージ画像'
                      />
                    </div>
                  ))
                : null}
              {console.log('イメージ', spotEdit.image_url)}
            </div>
            <SpotUploadButton onUpload={handleDrop} loading={uploading} />
            {/* スポット情報 */}
            <div>
              <h2 className='mt-10'>スポット情報</h2>
              <div className='text-xs'>
                <div className='flex gap-8'>
                  <div className='mb-4'>
                    <label htmlFor='name' className='flex justify-start pt-10 pb-3'>
                      スポット名
                    </label>
                    {console.log('スポット', spot)}
                    {spot ? (
                      <input
                        value={spotEdit.name}
                        onChange={(e) => {
                          setSpotEdit({ ...spotEdit, name: e.target.value.trim() });
                        }}
                        className='w-[150px] sm:w-[250px] md:w-[325px] max-w-full p-2 rounded-md border-2 placeholder-gray-500'
                      />
                    ) : null}
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='title' className='flex justify-start pt-10 pb-3'>
                      スポットタイトル
                    </label>
                    {spot ? (
                      <input
                        type='text'
                        value={spotEdit.title}
                        onChange={(e) => {
                          setSpotEdit({ ...spotEdit, title: e.target.value.trim() });
                        }}
                        className='w-[150px] sm:w-[250px] md:w-[325px] max-w-full p-2 rounded-md border-2 placeholder-gray-500'
                      />
                    ) : null}
                  </div>
                </div>
                <div className='flex gap-8'>
                  <div className='mb-4'>
                    <label htmlFor='prefectures_name' className='flex justify-start pt-10 pb-3'>
                      都道府県名
                    </label>
                    {prefecturesCreatedAt.length == 0 ? null : (
                      <div>
                        <select
                          value={spotEdit.prefecture_id}
                          onChange={(e) => {
                            setSpotEdit({ ...spotEdit, prefecture_id: e.target.value.trim() });
                          }}
                          className='w-[150px] sm:w-[250px] md:w-[325px] max-w-full p-2 rounded-md border-2 placeholder-gray-500'
                        >
                          <option value='prefectures_select'>都道府県を選択</option>
                          {prefecturesCreatedAt.map((value, index) => (
                            <option
                              key={index}
                              value={value['prefectures_index']}
                              selected={value['prefectures_index'] === spotEdit.prefecture_id}
                            >
                              {value['prefectures_name']}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='system' className='flex justify-start pt-10 pb-3'>
                      制度名
                    </label>
                    {systemsCreatedAt.length == 0 ? null : (
                      <select
                        value={spotEdit.system_id}
                        onChange={(e) => {
                          setSpotEdit({ ...spotEdit, system_id: e.target.value.trim() });
                        }}
                        className='w-[150px] sm:w-[250px] md:w-[325px] max-w-full p-2 rounded-md border-2 placeholder-gray-500'
                      >
                        <option value='systems_select'>制度を選択</option>
                        {systemsCreatedAt.map((value, index) => (
                          <option
                            key={index}
                            value={value['systems_index']}
                            selected={value['systems_index'] === spotEdit.system_id}
                          >
                            {value['systems_name']}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* スポット説明 */}
            <h2 className='mt-10'>スポット説明</h2>
            <div className='text-xs'>
              <div className='mb-4'>
                <label htmlFor='appeal' className='flex justify-start pt-10 pb-3'>
                  アピールポイント
                </label>
                {spot ? (
                  <textarea
                    value={spotEdit.appeal}
                    onChange={(e) => {
                      setSpotEdit({ ...spotEdit, appeal: e.target.value.trim() });
                    }}
                    className='w-full h-24 p-2 rounded-md border-2 placeholder-gray-500'
                  />
                ) : null}
              </div>
            </div>
            {/* スポット詳細 */}
            <h2 className='mt-10'>スポット詳細</h2>
            <div className='text-xs'>
              <div className='flex gap-8'>
                <div className='mb-4'>
                  <label htmlFor='area' className='flex justify-start pt-10 pb-3'>
                    物件所在地
                  </label>
                  {spot ? (
                    <input
                      type='text'
                      value={spotEdit.area}
                      onChange={(e) => {
                        setSpotEdit({ ...spotEdit, area: e.target.value.trim() });
                      }}
                      className='w-[150px] sm:w-[250px] md:w-[325px] max-w-full p-2 rounded-md border-2 placeholder-gray-500'
                    />
                  ) : null}
                </div>

                <div className='mb-4'>
                  <label htmlFor='usage_fee' className='flex justify-start pt-10 pb-3'>
                    利用料金
                  </label>
                  {spot ? (
                    <input
                      type='text'
                      value={spotEdit.usage_fee}
                      onChange={(e) => {
                        setSpotEdit({ ...spotEdit, usage_fee: e.target.value.trim() });
                      }}
                      className='w-[150px] sm:w-[250px] md:w-[325px] max-w-full p-2 rounded-md border-2 placeholder-gray-500'
                    />
                  ) : null}
                </div>
              </div>
              <div className='mb-4'>
                <label htmlFor='term' className='flex justify-start pt-10 pb-3'>
                  利用期間
                </label>
                {spot ? (
                  <input
                    type='text'
                    value={spotEdit.term}
                    onChange={(e) => {
                      setSpotEdit({ ...spotEdit, term: e.target.value.trim() });
                    }}
                    className='w-[150px] sm:w-[250px] md:w-[325px] max-w-full p-2 rounded-md border-2 placeholder-gray-500'
                  />
                ) : null}
              </div>
            </div>
            {/* お問い合わせ */}
            <h2 className='mt-10'>お問い合わせ先</h2>
            <div className='text-xs'>
              <div className='flex gap-8'>
                <div className='mb-4'>
                  <label htmlFor='manager' className='flex justify-start pt-10 pb-3'>
                    担当者
                  </label>
                  {spot ? (
                    <input
                      type='text'
                      value={spotEdit.manager}
                      onChange={(e) => {
                        setSpotEdit({ ...spotEdit, manager: e.target.value.trim() });
                      }}
                      className='w-[150px] sm:w-[250px] md:w-[325px] max-w-full p-2 rounded-md border-2 placeholder-gray-500'
                    />
                  ) : null}
                </div>
                <div className='mb-4'>
                  <label htmlFor='tel' className='flex justify-start pt-10 pb-3'>
                    電話番号
                  </label>
                  {spot ? (
                    <input
                      type='text'
                      value={spotEdit.tel}
                      onChange={(e) => {
                        setSpotEdit({ ...spotEdit, manager: e.target.value.trim() });
                      }}
                      className='w-[150px] sm:w-[250px] md:w-[325px] max-w-full p-2 rounded-md border-2 placeholder-gray-500'
                    />
                  ) : null}
                </div>
              </div>
              <div className='mb-4'>
                <label htmlFor='email' className='flex justify-start pt-10 pb-3'>
                  メールアドレス
                </label>
                {spot ? (
                  <input
                    type='text'
                    value={spotEdit.email}
                    onChange={(e) => {
                      setSpotEdit({ ...spotEdit, manager: e.target.value.trim() });
                    }}
                    className='w-[150px] sm:w-[250px] md:w-[325px] max-w-full p-2 rounded-md border-2 placeholder-gray-500'
                  />
                ) : null}
              </div>
            </div>
            <div className='text-center pb-10'>
              <button
                onClick={handleSpotEdit}
                className='text-sm px-5 py-4 mt-10 mr-4 text-white bg-blue-300 rounded-lg'
              >
                編集する
              </button>
            </div>
          </div>
          <Toaster />
        </AdminInfoLayout>
      </>
    );
  }
  return <></>;
};

export default SpotsEdit;
