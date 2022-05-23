/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { Sidebar } from 'src/components/Layout/Sidebar';
import { supabase } from 'src/libs/supabase';
import { useCallback } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { NextPage } from 'next';
import { Session } from '@supabase/supabase-js';
import { getSystems } from 'src/hooks/useSystemSelect';
import { Spot } from 'src/types/spot';
import { Prefectures } from 'src/types/prefectures';
import { Systems } from 'src/types/systems';
import { Spinner } from '@chakra-ui/react';
import { DEFAULT_SPOTS_BUCKET } from 'src/libs/regular';
import { getPrefecturesCreatedAt } from 'src/hooks/usePrefecturesCreatedAtSelect';
import { PrefecturesCreatedAt } from 'src/types/prefecturesCreatedAt';
import SpotUploadButton from 'src/components/Button/UploadButton/SpotUploadButton';
import { SystemsCreatedAt } from 'src/types/systemsCreatedAt';
import { getSystemsCreatedAt } from 'src/hooks/useSystemssCreatedAtSelect';

const SpotsPost: NextPage = () => {
  const [spotPost, setSpotPost] = useState<Spot>({
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
    updated_at: '',
  });

  const [prefecturesCreatedAt, setPrefecturesCreatedAt] = useState<PrefecturesCreatedAt[]>([]);
  const [systemsCreatedAt, setSystemsCreatedAt] = useState<SystemsCreatedAt[]>([]);
  const [prefectures_name, setPrefecturesName] = useState<Prefectures[]>([]);
  const [systems_name, setSystemsName] = useState<Systems[]>([]);
  const [spot, setSpot] = useState<Spot>();
  const [spotImage, setSpotImage] = useState<string | null>('');
  const [session, setSession] = useState<Session | null>(null);
  const [id, setId] = useState<string>('');
  const [uploading, setUploading] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const user = supabase.auth.user();

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
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, [setPrefecturesCreatedAt]);

  useEffect(() => {
    fetchPrefecturesCreatedAt();
  }, [user, fetchPrefecturesCreatedAt]);

  const fetchPrefecturesListName = useCallback(async () => {
    try {
      const data = await getPrefecturesCreatedAt();
      setPrefecturesName(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, [setPrefecturesName]);

  useEffect(() => {
    fetchPrefecturesListName();
  }, [user, fetchPrefecturesListName]);

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
  }, [user, fetchPrefecturesCreatedAt]);

  const fetchSystemsListName = useCallback(async () => {
    try {
      const data = await getSystems();
      setSystemsName(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchSystemsListName();
  }, [user, fetchSystemsListName]);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event: string, session: Session | null) => {
      setSession(session);
    });
  }, []);

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
    },
    [setFiles],
  );

  const handleSpotPost = useCallback(async () => {
    // console.log('ファイル', files);

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

    // console.log('イメージ', spotPost.image_url);
    // console.log('ユーザーID', user?.id);

    const { data, error } = await supabase.from('spots').insert({
      admin_id: user?.id,
      prefecture_id: Number(spotPost.prefecture_id),
      system_id: Number(spotPost.system_id),
      name: spotPost.name,
      title: spotPost.title,
      image_url: filePath,
      appeal: spotPost.appeal,
      area: spotPost.area,
      link: spotPost.link,
      target_person: spotPost.target_person,
      usage_fee: spotPost.usage_fee,
      term: spotPost.term,
      postal_code: spotPost.postal_code,
      address: spotPost.address,
      manager: spotPost.manager,
      tel: spotPost.tel,
      email: spotPost.email,
    });

    console.log({ data, error });

    toast.success('スポットを登録しました', {});
  }, [
    spotPost.id,
    user?.id,
    spotPost.prefecture_id,
    spotPost.system_id,
    spotPost.name,
    spotPost.title,
    spotPost.image_url,
    spotPost.appeal,
    spotPost.area,
    spotPost.link,
    spotPost.target_person,
    spotPost.usage_fee,
    spotPost.term,
    spotPost.postal_code,
    spotPost.address,
    spotPost.manager,
    spotPost.tel,
    spotPost.email,
  ]);

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
        <div className='flex bg-gray-100 h-full'>
          <Sidebar />
          <div className='bg-gray-200 h-full ml-auto mr-auto my-20 px-6 sm:px-24 overflow-hidden shadow-lg '>
            {/* スポット投稿 */}
            <h1 className='text-3xl mt-24'>スポット投稿</h1>
            <h2 className='flex mt-5'>
              スポット画像<p className=''>(最大5枚)</p>
            </h2>
            {/* console.log(spotImage)) */}
            {/* {/* {console.log('spotImage', spotImage)} */}
            {/* {console.log('ファイル', files)} */}
            <div className='flex flex-wrap items-end mt-6'>
              {files && files.length > 0 ? (
                files.map((file, index) => (
                  // <SpotImage key={index} url={URL.createObjectURL(file)} size={60} />
                  <div key={index} className='py-2 px-1'>
                    <img
                      src={URL.createObjectURL(file)}
                      style={{ height: index === 0 ? 90 : 60, width: index === 0 ? 90 : 60 }}
                      alt='スポットイメージ画像'
                    />
                  </div>
                ))
              ) : (
                <div className='flex flex-wrap gap-2 mt-5 sm:gap-6'>
                  <div className='bg-white w-16 h-16'>
                    <img
                      src='/icons/camera-icon.png'
                      alt='カメラアイコン'
                      className='m-auto mt-4 w-8 h-8'
                    />
                  </div>
                </div>
              )}
            </div>
            <SpotUploadButton onUpload={handleDrop} loading={uploading} />
            {/* スポット情報 */}
            <div>
              <h2 className='mt-10 '>スポット情報</h2>
              <div className='mt-10 text-xs'>
                <div className='mb-5'>
                  <label htmlFor='name'>スポット名</label>
                  <input
                    type='text'
                    value={spotPost.name}
                    onChange={(e) => {
                      setSpotPost({ ...spotPost, name: e.target.value.trim() });
                    }}
                    placeholder='穴水町'
                    className='w-full p-2 rounded-md placeholder-gray-500'
                  />
                </div>
                <div className='mb-5'>
                  <label htmlFor='title'>スポットタイトル</label>
                  <input
                    type='text'
                    value={spotPost.title}
                    onChange={(e) => {
                      setSpotPost({ ...spotPost, title: e.target.value.trim() });
                    }}
                    placeholder='自然豊かな穴水町での生活を体験してみませんか'
                    className='w-full p-2 rounded-md placeholder-gray-500'
                  />
                </div>
                <div className='mb-5'>
                  <label htmlFor='prefectures_name'>都道府県名</label>
                  {/* {console.log(prefecturesCreatedAt)} */}
                  {prefecturesCreatedAt.length == 0 ? null : (
                    <select
                      value={spotPost.prefecture_id}
                      onChange={(e) => {
                        setSpotPost({ ...spotPost, prefecture_id: e.target.value.trim() });
                      }}
                      className='w-full p-2 rounded-md placeholder-gray-500'
                    >
                      {/* {console.log(spotPost.prefecture_id)} */}
                      <option value='prefectures_select'>都道府県を選択</option>
                      {prefecturesCreatedAt.map((value, index) => (
                        <option key={index} value={value['prefectures_index']}>
                          {value['prefectures_name']}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
                <div className='mb-5'>
                  <label htmlFor='system'>制度名</label>
                  {systemsCreatedAt.length == 0 ? null : (
                    <select
                      value={spotPost.system_id}
                      onChange={(e) => {
                        setSpotPost({ ...spotPost, system_id: e.target.value.trim() });
                      }}
                      className='w-full p-2 rounded-md placeholder-gray-500'
                    >
                      {/* {console.log(spotPost.system_id)} */}
                      <option value='systems_select'>制度を選択</option>
                      {systemsCreatedAt.map((value, index) => (
                        <option key={index} value={value['systems_index']}>
                          {value['systems_name']}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>
            </div>
            {/* スポット説明 */}
            <h2 className='mt-10'>スポット説明</h2>
            <div className='mt-10 text-xs'>
              <div className='mb-5'>
                <label htmlFor='appeal'>アピールポイント</label>
                <textarea
                  value={spotPost.appeal}
                  onChange={(e) => {
                    setSpotPost({ ...spotPost, appeal: e.target.value.trim() });
                  }}
                  placeholder='世界農業遺産「能登の里山里海」に位置する石川県穴水町は美しい山と海に恵まれ、
            穏やかな時間が流れています。
            そんな穴水町の暮らしぶりを気軽に体験して頂けるように「短期移住体験住宅」をご用意いたしました。
            空港や駅へのアクセスも良く、暮らしやすい場所で移住体験ができます。
            田舎への移住をお考えの方はこの機会にぜひご利用下さい。'
                  className='w-full h-24  p-2 rounded-md placeholder-gray-500'
                />
              </div>
            </div>
            {/* スポット詳細 */}
            <h2 className='mt-10'>スポット詳細</h2>
            <div className='mt-10 text-xs'>
              <div className='mb-5'>
                <label htmlFor='area'>物件所在地</label>
                <input
                  type='text'
                  value={spotPost.area}
                  onChange={(e) => {
                    setSpotPost({ ...spotPost, area: e.target.value.trim() });
                  }}
                  placeholder='石川県穴水町'
                  className='w-full p-2 rounded-md placeholder-gray-500'
                />
              </div>
              <div className='mb-5'>
                <label htmlFor='スポット画像'>物件関連リンク</label>
                <input
                  type='text'
                  value={spotPost.link}
                  onChange={(e) => {
                    setSpotPost({ ...spotPost, link: e.target.value.trim() });
                  }}
                  placeholder='https://test.com'
                  className='w-full p-2 rounded-md placeholder-gray-500'
                />
              </div>
              <div className='mb-5'>
                <label htmlFor='スポット画像'>対象者</label>
                <input
                  type='text'
                  value={spotPost.target_person}
                  onChange={(e) => {
                    setSpotPost({ ...spotPost, target_person: e.target.value.trim() });
                  }}
                  placeholder='町外から当町への移住を希望する人物'
                  className='w-full p-2 rounded-md placeholder-gray-500'
                />
              </div>
              <div className='mb-5'>
                <label htmlFor='スポット画像'>利用料金</label>
                <input
                  type='text'
                  value={spotPost.usage_fee}
                  onChange={(e) => {
                    setSpotPost({ ...spotPost, usage_fee: e.target.value.trim() });
                  }}
                  placeholder='無料'
                  className='w-full p-2 rounded-md placeholder-gray-500'
                />
              </div>
              <div className='mb-5'>
                <label htmlFor='スポット画像'>利用期間</label>
                <input
                  type='text'
                  value={spotPost.term}
                  onChange={(e) => {
                    setSpotPost({ ...spotPost, term: e.target.value.trim() });
                  }}
                  placeholder='最長７泊８日'
                  className='w-full p-2 rounded-md placeholder-gray-500'
                />
              </div>
            </div>
            {/* お問い合わせ */}
            <h2 className='mt-10'>お問い合わせ先</h2>
            <div className='mt-10 text-xs'>
              <div className='mb-5'>
                <label htmlFor='postal_code'>郵便番号</label>
                <input
                  type='text'
                  value={spotPost.postal_code}
                  onChange={(e) => {
                    setSpotPost({ ...spotPost, postal_code: e.target.value.trim() });
                  }}
                  placeholder='927-8601'
                  className='w-full p-2 rounded-md placeholder-gray-500'
                />
              </div>
              <div className='mb-5'>
                <label htmlFor='address'>住所</label>
                <input
                  type='text'
                  value={spotPost.address}
                  onChange={(e) => {
                    setSpotPost({ ...spotPost, address: e.target.value.trim() });
                  }}
                  placeholder='石川県鳳珠郡穴水町字川島ラの174番地'
                  className='w-full p-2 rounded-md placeholder-gray-500'
                />
              </div>
              <div className='mb-5'>
                <label htmlFor='manager'>担当者</label>
                <input
                  type='text'
                  value={spotPost.manager}
                  onChange={(e) => {
                    setSpotPost({ ...spotPost, manager: e.target.value.trim() });
                  }}
                  placeholder='穴水町観光交流課'
                  className='w-full p-2 rounded-md placeholder-gray-500'
                />
              </div>
              <div className='mb-5'>
                <label htmlFor='tel'>電話番号</label>
                <input
                  type='text'
                  value={spotPost.tel}
                  onChange={(e) => {
                    setSpotPost({ ...spotPost, tel: e.target.value.trim() });
                  }}
                  placeholder='0768-52-3671'
                  className='w-full p-2 rounded-md placeholder-gray-500'
                />
              </div>
              <div className='mb-5'>
                <label htmlFor='email'>メールアドレス</label>
                <input
                  type='text'
                  value={spotPost.email}
                  onChange={(e) => {
                    setSpotPost({ ...spotPost, email: e.target.value.trim() });
                  }}
                  placeholder='test@gmai.com'
                  className='w-full p-2 rounded-md placeholder-gray-500'
                />
              </div>
            </div>
            <div className='text-center pb-10'>
              <button
                onClick={handleSpotPost}
                className='text-sm px-5 py-4 mt-10 mr-4 text-white bg-blue-300 rounded-lg'
              >
                投稿する
              </button>
            </div>
            <Toaster />
          </div>
        </div>
      </>
    );
  }
  return <></>;
};

export default SpotsPost;
