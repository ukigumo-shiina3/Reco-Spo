/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react';
import { Sidebar } from 'src/components/Layout/Sidebar';
import { supabase } from 'src/libs/supabase';
import { useCallback } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { NextPage } from 'next';
import { Session } from '@supabase/supabase-js';
import { Spot } from 'src/types/spot';
import { getSpotsDetail } from 'src/hooks/useSpotDetailSelect';
import { useRouter } from 'next/router';
import { getPrefectures } from "src/hooks/usePostPrefectureSelect'";
import { getSystems } from 'src/hooks/useSystemSelect';

const user = supabase.auth.user();

const SpotsEdit: NextPage<Spot> = () => {
  const router = useRouter();

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
  const [spot, setSpot] = useState<Spot | null>(null);
  const [id, setId] = useState<string>();

  const fetchPrefecturesListName = useCallback(async () => {
    const data: string[] | null = await getPrefectures();
    setPrefecturesName(data || []);
  }, [setPrefecturesName]);

  useEffect(() => {
    fetchPrefecturesListName();
  }, [user, fetchPrefecturesListName]);

  const fetchSystemsListName = useCallback(async () => {
    const data: string[] | null = await getSystems();

    setSystemsName(data || []);
  }, [setSystemsName]);

  useEffect(() => {
    fetchSystemsListName();
  }, [user, fetchSystemsListName]);

  const fetchSpot = useCallback(async (id: string) => {
    const data = await getSpotsDetail(id);
    // console.log(data);
    setSpot(data || []);
  }, []);

  useEffect(() => {
    if (router.asPath !== router.route) {
      setId(String(router.query.id));
    }
    // console.log(router.query.id);
  }, [router]);

  useEffect(() => {
    if (id) {
      fetchSpot(router.query.id as string);
    }
    // console.log(router.query.id);
  }, [id, fetchSpot, router.query.id]);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event: string, session: Session | null) => {
      setSession(session);
    });
  }, []);

  const handleSpotEdit = useCallback(async () => {
    const { data, error } = await supabase
      .from('spots')
      .update({
        admin_id: user?.id,
        prefecture_id: prefecture_id,
        system_id: system_id,
        name: name,
        title: title,
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
      })
      .eq('id', id)
      .single();
    console.log({ data, error });

    toast.success('スポットを編集しました', {});
  }, [
    prefecture_id,
    system_id,
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
  // console.log({ spot });

  if (user) {
    return (
      <>
        <div className='flex bg-gray-100 h-full'>
          <Sidebar />
          <div className='bg-gray-200 h-full ml-auto mr-auto my-20 px-6 sm:px-24 overflow-hidden shadow-lg '>
            <h1 className='text-3xl mt-24'>スポット編集</h1>
            {/* スポット画像 */}
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
                  {spot ? (
                    <input
                      defaultValue={spot.name}
                      onChange={(e) => {
                        setName(e.target.value.trim());
                      }}
                      className='w-full p-2 rounded-l-md'
                    />
                  ) : null}
                  {console.log(spot)}
                </div>
                <div className='mb-5'>
                  <label htmlFor='title'>スポットタイトル</label>
                  {spot ? (
                    <input
                      type='text'
                      defaultValue={spot.title}
                      onChange={(e) => {
                        setTitle(e.target.value.trim());
                      }}
                      className='w-full p-2 rounded-l-md'
                    />
                  ) : null}
                </div>
                <div className='mb-5'>
                  <label htmlFor='prefectures_name'>都道府県名</label>
                  {prefectures_name.length == 0 ? null : (
                    <select
                      defaultValue={prefecture_id}
                      onChange={(e) => {
                        setPrefectureId(e.target.value);
                      }}
                      className='w-full p-2 rounded-l-md'
                    >
                      {prefectures_name.map((value) => (
                        <option key={value} value={value['id']}>
                          {value['prefectures_name']}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
                <div className='mb-5'>
                  <label htmlFor='system'>制度名</label>
                  {systems_name.length == 0 ? null : (
                    <select
                      defaultValue={system_id}
                      onChange={(e) => {
                        setSystemId(e.target.value);
                      }}
                      className='w-full p-2 rounded-l-md'
                    >
                      {systems_name.map((value) => (
                        <option key={value} value={value['id']}>
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
                {spot ? (
                  <textarea
                    defaultValue={spot.appeal}
                    onChange={(e) => {
                      setAppeal(e.target.value.trim());
                    }}
                    className='w-full h-24  p-2 rounded-l-md'
                  />
                ) : null}
              </div>
            </div>

            {/* スポット詳細 */}
            <h2 className='mt-10'>スポット詳細</h2>
            <div className='mt-10 text-xs'>
              <div className='mb-5'>
                <label htmlFor='area'>物件所在地</label>
                {spot ? (
                  <input
                    type='text'
                    defaultValue={spot.area}
                    onChange={(e) => {
                      setArea(e.target.value);
                    }}
                    className='w-full p-2 rounded-l-md'
                  />
                ) : null}
              </div>
              <div className='mb-5'>
                <label htmlFor='スポット画像'>物件関連リンク</label>
                {spot ? (
                  <input
                    type='text'
                    defaultValue={spot.link}
                    onChange={(e) => {
                      setLink(e.target.value);
                    }}
                    className='w-full p-2 rounded-l-md'
                  />
                ) : null}
              </div>
              <div className='mb-5'>
                <label htmlFor='スポット画像'>対象者</label>
                {spot ? (
                  <input
                    type='text'
                    defaultValue={spot.target_person}
                    onChange={(e) => {
                      setTargetPerson(e.target.value);
                    }}
                    className='w-full p-2 rounded-l-md'
                  />
                ) : null}
              </div>
              <div className='mb-5'>
                <label htmlFor='スポット画像'>利用料金</label>
                {spot ? (
                  <input
                    type='text'
                    defaultValue={spot.usage_fee}
                    onChange={(e) => {
                      setUsageFee(e.target.value);
                    }}
                    className='w-full p-2 rounded-l-md'
                  />
                ) : null}
              </div>
              <div className='mb-5'>
                <label htmlFor='スポット画像'>利用期間</label>
                {spot ? (
                  <input
                    type='text'
                    defaultValue={spot.term}
                    onChange={(e) => {
                      setTerm(e.target.value);
                    }}
                    className='w-full p-2 rounded-l-md'
                  />
                ) : null}
              </div>
            </div>

            {/* お問い合わせ */}
            <h2 className='mt-10'>お問い合わせ先</h2>
            <div className='mt-10 text-xs'>
              <div className='mb-5'>
                <label htmlFor='postal_code'>郵便番号</label>
                {spot ? (
                  <input
                    type='text'
                    defaultValue={spot.postal_code}
                    onChange={(e) => {
                      setPostalCode(e.target.value.trim());
                    }}
                    className='w-full p-2 rounded-l-md'
                  />
                ) : null}
              </div>
              <div className='mb-5'>
                <label htmlFor='address'>住所</label>
                {spot ? (
                  <input
                    type='text'
                    defaultValue={spot.address}
                    onChange={(e) => {
                      setAddress(e.target.value.trim());
                    }}
                    className='w-full p-2 rounded-l-md'
                  />
                ) : null}
              </div>
              <div className='mb-5'>
                <label htmlFor='manager'>担当者</label>
                {spot ? (
                  <input
                    type='text'
                    defaultValue={spot.manager}
                    onChange={(e) => {
                      setManager(e.target.value.trim());
                    }}
                    className='w-full p-2 rounded-l-md'
                  />
                ) : null}
              </div>
              <div className='mb-5'>
                <label htmlFor='tel'>電話番号</label>
                {spot ? (
                  <input
                    type='text'
                    defaultValue={spot.tel}
                    onChange={(e) => {
                      setTel(e.target.value.trim());
                    }}
                    className='w-full p-2 rounded-l-md'
                  />
                ) : null}
              </div>
              <div className='mb-5'>
                <label htmlFor='email'>メールアドレス</label>
                {spot ? (
                  <input
                    type='text'
                    defaultValue={spot.email}
                    onChange={(e) => {
                      setEmail(e.target.value.trim());
                    }}
                    className='w-full p-2 rounded-l-md'
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
            <Toaster />
          </div>
        </div>
      </>
    );
  }
  return <></>;
};

export default SpotsEdit;
