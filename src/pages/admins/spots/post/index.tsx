/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, VFC } from 'react';
import { Sidebar } from 'src/components/layout/Sidebar';
import { supabase } from 'src/libs/supabase';
import { useCallback } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Post } from 'src/types/post';
import { getPrefecturesName } from 'src/hooks/usePostSelect';

const user = supabase.auth.user();

const SpotsPost: VFC<Post> = (props) => {
  const [name, setName] = useState<String>('');
  const [title, setTitle] = useState<String>('');
  const [prefectures, setPrefectures] = useState<{ id: string; name: string }[]>([]);
  const [appeal, setAppeal] = useState<String>('');
  const [area, setArea] = useState<String>('');
  const [link, setLink] = useState<String>('');
  const [targetPerson, setTargetPerson] = useState<String>('');
  const [usageFee, setUsageFee] = useState<String>('');
  const [term, setTerm] = useState<String>('');
  const [postal_code, setPostalCode] = useState<String>('');
  const [address, setAddress] = useState<String>('');
  const [manager, setManager] = useState<String>('');
  const [tel, setTel] = useState<String>('');
  const [email, setEmail] = useState<String>('');

  const fetchPrefecturesListName = useCallback(async () => {
    const data: string[] | null = await getPrefecturesName();
    setPrefectures(data || []);
    // console.log(data);
  }, [setPrefectures]);

  useEffect(() => {
    fetchPrefecturesListName();
  }, [user, fetchPrefecturesListName]);

  const HandleSpotPost = useCallback(async () => {
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
      prefectures: prefectures,
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
  ]);

  if (user) {
    return (
      <>
        <div className='flex bg-gray-100 h-full'>
          <Sidebar />
          <div className='bg-gray-200 h-full ml-auto mr-auto my-20 px-6 sm:px-16 overflow-hidden shadow-lg '>
            {/* スポット投稿 */}
            <h1 className='text-3xl mt-24'>スポット投稿</h1>
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
                    name='name'
                    value={name}
                    id='name'
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
                    name='title'
                    value={title}
                    id='title'
                    onChange={(e) => {
                      setTitle(e.target.value.trim());
                    }}
                    placeholder='自然豊かな穴水町での生活を体験してみませんか'
                    className='w-full p-2 rounded-l-md placeholder-gray-500'
                  />
                </div>
                <div className='mb-5'>
                  <label htmlFor='prefectures'>都道府県名</label>

                  {/* prefecture_name */}
                  {prefectures.length == 0 ? null : (
                    <select
                      value={prefectures}
                      onChange={(e) => {
                        setPrefectures([e.target.value]);
                      }}
                      className='w-full p-2 rounded-l-md placeholder-gray-500'
                    >
                      {prefectures.map((value) => (
                        <option key={value} value={value['prefectures']}>
                          {value['prefectures']}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
                {/* {console.log(prefectures)} */}
                <div className='mb-5'>
                  <label htmlFor='system'>カテゴリ名</label>
                  <select
                    // type='select'
                    name='system'
                    // value={system}
                    id='system'
                    // onChange={(e) => {
                    //   setSystem(e.target.value.trim());
                    // }}
                    placeholder='カテゴリを選択してください'
                    className='w-full p-2 rounded-l-md placeholder-gray-500'
                  />
                </div>
              </div>
            </div>

            {/* スポット説明 */}
            <h2 className='mt-10'>スポット説明</h2>
            <div className='mt-10 text-xs'>
              <div className='mb-5'>
                <label htmlFor='appeal'>アピールポイント</label>
                <textarea
                  name='appeal'
                  value={appeal}
                  id='appeal'
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
            {/* <SpotInfo name={name} title={title} /> */}

            {/* スポット詳細 */}
            <h2 className='mt-10'>スポット詳細</h2>
            <div className='mt-10 text-xs'>
              <div className='mb-5'>
                <label htmlFor='area'>物件所在地</label>
                <input
                  type='text'
                  name='area'
                  value={area}
                  id='area'
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
                  name='link'
                  value={link}
                  id='link'
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
                  name='target_person'
                  value={targetPerson}
                  id='target_person'
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
                  name='usageFee'
                  value={usageFee}
                  id='usageFee'
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
                  name='term'
                  value={term}
                  id='term'
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
                  name='postal_code'
                  value={postal_code}
                  id='postal_code'
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
                  name='address'
                  value={address}
                  id='address'
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
                  name='manager'
                  value={manager}
                  id='manager'
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
                  name='tel'
                  value={tel}
                  id='tel'
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
                  name='email'
                  value={email}
                  id='email'
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
                onClick={HandleSpotPost}
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
