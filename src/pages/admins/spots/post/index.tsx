/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, VFC } from 'react';
import { Sidebar } from 'src/components/Layout/Sidebar';
import { supabase } from 'src/libs/supabase';
import { useCallback } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { getPrefectures } from 'src/hooks/usePostPrefectureSelect';
import { NextPage } from 'next';
import { Session } from '@supabase/supabase-js';
import { getSystems } from 'src/hooks/useSystemSelect';
import { Spot } from 'src/types/spot';
import { Prefectures } from 'src/types/prefectures';
import { Systems } from 'src/types/systems';

const user = supabase.auth.user();

const SpotsPost: NextPage = () => {
  const [spotPost, setSpotPost] = useState<Spot>({
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

  const [prefectures_name, setPrefecturesName] = useState<Prefectures[]>([]);
  const [systems_name, setSystemsName] = useState<Systems[]>([]);
  const [session, setSession] = useState<Session | null>(null);

  const fetchPrefecturesListName = useCallback(async () => {
    const data = await getPrefectures();
    setPrefecturesName(data);
  }, [setPrefecturesName]);

  useEffect(() => {
    fetchPrefecturesListName();
  }, [user, fetchPrefecturesListName]);

  const fetchSystemsListName = useCallback(async () => {
    const data = await getSystems();
    setSystemsName(data);
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

  const handleSpotPost = useCallback(async () => {
    console.log(user?.id);

    // if (
    //   name === '' ||
    //   title === '' ||
    //   appeal === '' ||
    //   area === '' ||
    //   link === '' ||
    //   targetPerson === '' ||
    //   usageFee === '' ||
    //   term === '' ||
    //   postal_code === '' ||
    //   address === '' ||
    //   manager === '' ||
    //   tel === '' ||
    //   email === ''
    // ) {
    //   toast.error('入力されていない項目があります', {});
    // } else {
    const { data, error } = await supabase.from('spots').insert({
      name: spotPost.name,
      title: spotPost.title,
      admin_id: user?.id,
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
      prefecture_id: spotPost.prefecture_id,
      system_id: spotPost.system_id,
    });
    console.log({ data, error });

    toast.success('スポットを登録しました', {});
    // }
  }, [
    spotPost.prefecture_id,
    spotPost.system_id,
    spotPost.name,
    spotPost.title,
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

  if (user) {
    return (
      <>
        <div className='flex bg-gray-100 h-full'>
          <Sidebar group={''} />
          <div className='bg-gray-200 h-full ml-auto mr-auto my-20 px-6 sm:px-24 overflow-hidden shadow-lg '>
            {/* スポット投稿 */}
            <h1 className='text-3xl mt-24'>スポット投稿</h1>
            {/* <Account key={session.user.id} session={session} /> */}
            <h2 className='flex mt-5'>
              スポット画像<p className=''>(最大5枚)</p>
            </h2>
            <div className='flex flex-wrap gap-2 mt-5 sm:gap-6'>
              <div className='bg-white w-16 h-16'>
                <img src='/camera-icon.png' alt='カメラアイコン' className='m-auto mt-4 w-8 h-8' />
              </div>
              <div className='bg-white w-16 h-16'>
                <img src='/camera-icon.png' alt='カメラアイコン' className='m-auto mt-4 w-8 h-8' />
              </div>
              <div className='bg-white w-16 h-16'>
                <img src='/camera-icon.png' alt='カメラアイコン' className='m-auto mt-4 w-8 h-8' />
              </div>
              <div className='bg-white w-16 h-16'>
                <img src='/camera-icon.png' alt='カメラアイコン' className='m-auto mt-4 w-8 h-8' />
              </div>
              <div className='bg-white w-16 h-16'>
                <img src='/camera-icon.png' alt='カメラアイコン' className='m-auto mt-4 w-8 h-8' />
              </div>
            </div>
            <div className='mt-5'>
              <img
                src='/image-upload.png'
                alt='画像アップロードアイコン'
                className='w-hull h-18 sm:h-24'
              />
            </div>

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
                    className='w-full p-2 rounded-l-md placeholder-gray-500'
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
                    className='w-full p-2 rounded-l-md placeholder-gray-500'
                  />
                </div>
                <div className='mb-5'>
                  <label htmlFor='prefectures_name'>都道府県名</label>
                  {/* {console.log(prefectures_name)} */}
                  {prefectures_name.length == 0 ? null : (
                    <select
                      value={spotPost.prefecture_id}
                      onChange={(e) => {
                        setSpotPost({ ...spotPost, prefecture_id: e.target.value.trim() });
                        console.log(e.target.value);
                      }}
                      className='w-full p-2 rounded-l-md placeholder-gray-500'
                    >
                      {prefectures_name.map((value, index) => (
                        <option key={index} value={value['id']}>
                          {/* {console.log(value['id'])} */}
                          {value['prefectures_name']}
                          {/* {console.log(value['prefectures_name'])} */}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
                {/* {console.log(prefectures_name)} */}
                <div className='mb-5'>
                  <label htmlFor='system'>制度名</label>
                  {systems_name.length == 0 ? null : (
                    <select
                      value={spotPost.system_id}
                      onChange={(e) => {
                        setSpotPost({ ...spotPost, system_id: e.target.value.trim() });
                        console.log(e.target.value);
                      }}
                      className='w-full p-2 rounded-l-md placeholder-gray-500'
                    >
                      {systems_name.map((value, index) => (
                        <option key={index} value={value['id']}>
                          {/* {console.log(value['id'])} */}
                          {value['systems_name']}
                          {/* {console.log(value['systems_name'])} */}
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
                  className='w-full h-24  p-2 rounded-l-md placeholder-gray-500'
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
                  className='w-full p-2 rounded-l-md placeholder-gray-500'
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
                  className='w-full p-2 rounded-l-md placeholder-gray-500'
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
                  className='w-full p-2 rounded-l-md placeholder-gray-500'
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
                  className='w-full p-2 rounded-l-md placeholder-gray-500'
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
                  className='w-full p-2 rounded-l-md placeholder-gray-500'
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
                  className='w-full p-2 rounded-l-md placeholder-gray-500'
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
                  className='w-full p-2 rounded-l-md placeholder-gray-500'
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
                  className='w-full p-2 rounded-l-md placeholder-gray-500'
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
                  className='w-full p-2 rounded-l-md placeholder-gray-500'
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
                  className='w-full p-2 rounded-l-md placeholder-gray-500'
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
