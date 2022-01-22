/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, VFC } from 'react';
import { Sidebar } from 'src/components/layout/Sidebar';
import { supabase } from 'src/libs/supabase';
import { useCallback } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { getPrefectures } from 'src/hooks/usePrefectureSelect';
import { NextPage } from 'next';
import Account from 'src/components/Profile';
import { Session } from '@supabase/supabase-js';
import { getSystems } from 'src/hooks/useSystemSelect';

const user = supabase.auth.user();

const SpotsPost: NextPage = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [prefecture_id, setPrefectureId] = useState('');
  const [prefectures_name, setPrefecturesName] = useState([]);
  const [system_id, setSystemId] = useState('');
  const [systems_name, setSystemsName] = useState([]);
  const [appeal, setAppeal] = useState('');
  const [area, setArea] = useState('');
  const [link, setLink] = useState('');
  const [targetPerson, setTargetPerson] = useState('');
  const [usageFee, setUsageFee] = useState('');
  const [term, setTerm] = useState('');
  const [postal_code, setPostalCode] = useState('');
  const [address, setAddress] = useState('');
  const [manager, setManager] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [session, setSession] = useState<Session | null>(null);

  const fetchPrefecturesListName = useCallback(async () => {
    const data: string[] | null = await getPrefectures();
    setPrefecturesName(data || []);
    // console.log(data);
  }, [setPrefecturesName]);

  useEffect(() => {
    fetchPrefecturesListName();
  }, [user, fetchPrefecturesListName]);

  const fetchSystemsListName = useCallback(async () => {
    const data: string[] | null = await getSystems();
    setSystemsName(data || []);
    // console.log(data);
  }, [setSystemsName]);

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
      name: name,
      title: title,
      admin_id: user?.id,
      appeal: appeal,
      area: area,
      link: link,
      target_person: targetPerson,
      usage_fee: usageFee,
      term: term,
      postal_code: postal_code,
      address: address,
      manager: manager,
      tel: tel,
      email: email,
      prefecture_id: prefecture_id,
      system_id: system_id,
    });
    console.log({ data, error });

    toast.success('スポットを登録しました', {});
    // }
  }, [
    name,
    title,
    appeal,
    area,
    link,
    targetPerson,
    usageFee,
    term,
    postal_code,
    address,
    manager,
    tel,
    email,
    prefecture_id,
    system_id,
  ]);

  if (user) {
    return (
      <>
        <div className='flex bg-gray-100 h-full'>
          <Sidebar />
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
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value.trim());
                    }}
                    placeholder='穴水町'
                    className='w-full p-2 rounded-l-md placeholder-gray-500'
                  />
                </div>
                <div className='mb-5'>
                  <label htmlFor='title'>スポットタイトル</label>
                  <input
                    type='text'
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value.trim());
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
                      value={prefecture_id}
                      onChange={(e) => {
                        setPrefectureId(e.target.value);
                        console.log(e.target.value);
                      }}
                      className='w-full p-2 rounded-l-md placeholder-gray-500'
                    >
                      {prefectures_name.map((value) => (
                        <option key={value} value={value['id']}>
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
                      value={system_id}
                      onChange={(e) => {
                        setSystemId(e.target.value);
                        console.log(e.target.value);
                      }}
                      className='w-full p-2 rounded-l-md placeholder-gray-500'
                    >
                      {systems_name.map((value) => (
                        <option key={value} value={value['id']}>
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
                  value={appeal}
                  onChange={(e) => {
                    setAppeal(e.target.value.trim());
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
                  value={area}
                  onChange={(e) => {
                    setArea(e.target.value);
                  }}
                  placeholder='石川県穴水町'
                  className='w-full p-2 rounded-l-md placeholder-gray-500'
                />
              </div>
              <div className='mb-5'>
                <label htmlFor='スポット画像'>物件関連リンク</label>
                <input
                  type='text'
                  value={link}
                  onChange={(e) => {
                    setLink(e.target.value);
                  }}
                  placeholder='https://test.com'
                  className='w-full p-2 rounded-l-md placeholder-gray-500'
                />
              </div>
              <div className='mb-5'>
                <label htmlFor='スポット画像'>対象者</label>
                <input
                  type='text'
                  value={targetPerson}
                  onChange={(e) => {
                    setTargetPerson(e.target.value);
                  }}
                  placeholder='町外から当町への移住を希望する人物'
                  className='w-full p-2 rounded-l-md placeholder-gray-500'
                />
              </div>
              <div className='mb-5'>
                <label htmlFor='スポット画像'>利用料金</label>
                <input
                  type='text'
                  value={usageFee}
                  onChange={(e) => {
                    setUsageFee(e.target.value);
                  }}
                  placeholder='無料'
                  className='w-full p-2 rounded-l-md placeholder-gray-500'
                />
              </div>
              <div className='mb-5'>
                <label htmlFor='スポット画像'>利用期間</label>
                <input
                  type='text'
                  value={term}
                  onChange={(e) => {
                    setTerm(e.target.value);
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
                  value={postal_code}
                  onChange={(e) => {
                    setPostalCode(e.target.value.trim());
                  }}
                  placeholder='927-8601'
                  className='w-full p-2 rounded-l-md placeholder-gray-500'
                />
              </div>
              <div className='mb-5'>
                <label htmlFor='address'>住所</label>
                <input
                  type='text'
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value.trim());
                  }}
                  placeholder='石川県鳳珠郡穴水町字川島ラの174番地'
                  className='w-full p-2 rounded-l-md placeholder-gray-500'
                />
              </div>
              <div className='mb-5'>
                <label htmlFor='manager'>担当者</label>
                <input
                  type='text'
                  value={manager}
                  onChange={(e) => {
                    setManager(e.target.value.trim());
                  }}
                  placeholder='穴水町観光交流課'
                  className='w-full p-2 rounded-l-md placeholder-gray-500'
                />
              </div>
              <div className='mb-5'>
                <label htmlFor='tel'>電話番号</label>
                <input
                  type='text'
                  value={tel}
                  onChange={(e) => {
                    setTel(e.target.value.trim());
                  }}
                  placeholder='0768-52-3671'
                  className='w-full p-2 rounded-l-md placeholder-gray-500'
                />
              </div>
              <div className='mb-5'>
                <label htmlFor='email'>メールアドレス</label>
                <input
                  type='text'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value.trim());
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
