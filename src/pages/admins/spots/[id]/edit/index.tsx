/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react';
import { Sidebar } from 'src/components/Layout/Sidebar';
import { supabase } from 'src/libs/supabase';
import { useCallback } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { NextPage } from 'next';
import { Session } from '@supabase/supabase-js';
import { Spot } from 'src/types/spot';
import { SpotEdit } from 'src/types/spotEdit';
import { getSpotsDetail } from 'src/hooks/useSpotDetailSelect';
import { useRouter } from 'next/router';
import { getPrefectures } from 'src/hooks/usePostPrefectureSelect';
import { getSystems } from 'src/hooks/useSystemSelect';

const user = supabase.auth.user();

const SpotsEdit: NextPage<Spot> = () => {
  const router = useRouter();

  const [spotEdit, setSpotEdit] = useState<SpotEdit>({
    name: '',
    title: '',
    prefecture_id: '',
    prefectures: {
      prefectures_name: [],
    },
    system_id: '',
    systems: {
      systems_name: [],
    },
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
    session: null,
    spot: null,
    id: '',
  });

  // const [prefectures_name, setPrefecturesName] = useState([]);
  // const [systems_name, setSystemsName] = useState([]);
  // const [session, setSession] = useState<Session | null>(null);
  // const [spot, setSpot] = useState<Spot | null>(null);
  // const [id, setId] = useState<string>();

  const fetchPrefecturesListName = useCallback(async () => {
    const data: string[] | null = await getPrefectures();
    setSpotEdit(data || []);
  }, [setSpotEdit]);

  useEffect(() => {
    fetchPrefecturesListName();
  }, [user, fetchPrefecturesListName]);

  const fetchSystemsListName = useCallback(async () => {
    const data: string[] | null = await getSystems();

    setSpotEdit(data || []);
  }, [setSpotEdit]);

  useEffect(() => {
    fetchSystemsListName();
  }, [user, fetchSystemsListName]);

  const fetchSpot = useCallback(async (id: string) => {
    const data = await getSpotsDetail(id);
    // console.log(data);
    setSpotEdit(data || []);
  }, []);

  useEffect(() => {
    if (router.asPath !== router.route) {
      setSpotEdit(String(router.query.id));
    }
    // console.log(router.query.id);
  }, [router]);

  useEffect(() => {
    if (spotEdit.id) {
      fetchSpot(router.query.id as string);
    }
    // console.log(router.query.id);
  }, [spotEdit.id, fetchSpot, router.query.id]);

  useEffect(() => {
    setSpotEdit(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event: string, session: Session | null) => {
      setSpotEdit(session);
    });
  }, []);

  const handleSpotEdit = useCallback(async () => {
    const { data, error } = await supabase
      .from('spots')
      .update({
        admin_id: user?.id,
        prefecture_id: spotEdit.prefecture_id,
        system_id: spotEdit.system_id,
        name: spotEdit.name,
        title: spotEdit.title,
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
      })
      .eq('id', spotEdit.id)
      .single();
    console.log({ data, error });

    toast.success('スポットを編集しました', {});
  }, [
    spotEdit.prefecture_id,
    spotEdit.system_id,
    spotEdit.name,
    spotEdit.title,
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
    spotEdit.id,
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
                  {spotEdit ? (
                    <input
                      defaultValue={spotEdit.name}
                      onChange={(e) => {
                        setSpotEdit({ ...spotEdit, name: e.target.value.trim() });
                      }}
                      className='w-full p-2 rounded-l-md'
                    />
                  ) : null}
                  {console.log(spotEdit)}
                </div>
                <div className='mb-5'>
                  <label htmlFor='title'>スポットタイトル</label>
                  {spotEdit ? (
                    <input
                      type='text'
                      defaultValue={spotEdit.title}
                      onChange={(e) => {
                        setSpotEdit({ ...spotEdit, title: e.target.value.trim() });
                      }}
                      className='w-full p-2 rounded-l-md'
                    />
                  ) : null}
                </div>
                <div className='mb-5'>
                  <label htmlFor='prefectures_name'>都道府県名</label>
                  {spotEdit.prefectures_name.length == 0 ? null : (
                    <select
                      defaultValue={spotEdit.prefecture_id}
                      onChange={(e) => {
                        setSpotEdit({ ...spotEdit, prefecture_id: e.target.value.trim() });
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
                      defaultValue={spotEdit.system_id}
                      onChange={(e) => {
                        setSpotEdit({ ...spotEdit, system_id: e.target.value.trim() });
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
                {spotEdit ? (
                  <textarea
                    defaultValue={spotEdit.appeal}
                    onChange={(e) => {
                      setSpotEdit({ ...spotEdit, appeal: e.target.value.trim() });
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
                {spotEdit ? (
                  <input
                    type='text'
                    defaultValue={spotEdit.area}
                    onChange={(e) => {
                      setSpotEdit({ ...spotEdit, area: e.target.value.trim() });
                    }}
                    className='w-full p-2 rounded-l-md'
                  />
                ) : null}
              </div>
              <div className='mb-5'>
                <label htmlFor='スポット画像'>物件関連リンク</label>
                {spotEdit ? (
                  <input
                    type='text'
                    defaultValue={spotEdit.link}
                    onChange={(e) => {
                      setSpotEdit({ ...spotEdit, link: e.target.value.trim() });
                    }}
                    className='w-full p-2 rounded-l-md'
                  />
                ) : null}
              </div>
              <div className='mb-5'>
                <label htmlFor='スポット画像'>対象者</label>
                {spotEdit ? (
                  <input
                    type='text'
                    defaultValue={spotEdit.target_person}
                    onChange={(e) => {
                      setSpotEdit({ ...spotEdit, target_person: e.target.value.trim() });
                    }}
                    className='w-full p-2 rounded-l-md'
                  />
                ) : null}
              </div>
              <div className='mb-5'>
                <label htmlFor='スポット画像'>利用料金</label>
                {spotEdit ? (
                  <input
                    type='text'
                    defaultValue={spotEdit.usage_fee}
                    onChange={(e) => {
                      setSpotEdit({ ...spotEdit, usage_fee: e.target.value.trim() });
                    }}
                    className='w-full p-2 rounded-l-md'
                  />
                ) : null}
              </div>
              <div className='mb-5'>
                <label htmlFor='スポット画像'>利用期間</label>
                {spotEdit ? (
                  <input
                    type='text'
                    defaultValue={spotEdit.term}
                    onChange={(e) => {
                      setSpotEdit({ ...spotEdit, term: e.target.value.trim() });
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
                {spotEdit ? (
                  <input
                    type='text'
                    defaultValue={spotEdit.postal_code}
                    onChange={(e) => {
                      setSpotEdit({ ...spotEdit, postal_code: e.target.value.trim() });
                    }}
                    className='w-full p-2 rounded-l-md'
                  />
                ) : null}
              </div>
              <div className='mb-5'>
                <label htmlFor='address'>住所</label>
                {spotEdit ? (
                  <input
                    type='text'
                    defaultValue={spotEdit.address}
                    onChange={(e) => {
                      setSpotEdit({ ...spotEdit, address: e.target.value.trim() });
                    }}
                    className='w-full p-2 rounded-l-md'
                  />
                ) : null}
              </div>
              <div className='mb-5'>
                <label htmlFor='manager'>担当者</label>
                {spotEdit ? (
                  <input
                    type='text'
                    defaultValue={spotEdit.manager}
                    onChange={(e) => {
                      setSpotEdit({ ...spotEdit, manager: e.target.value.trim() });
                    }}
                    className='w-full p-2 rounded-l-md'
                  />
                ) : null}
              </div>
              <div className='mb-5'>
                <label htmlFor='tel'>電話番号</label>
                {spotEdit ? (
                  <input
                    type='text'
                    defaultValue={spotEdit.tel}
                    onChange={(e) => {
                      setSpotEdit({ ...spotEdit, manager: e.target.value.trim() });
                    }}
                    className='w-full p-2 rounded-l-md'
                  />
                ) : null}
              </div>
              <div className='mb-5'>
                <label htmlFor='email'>メールアドレス</label>
                {spotEdit ? (
                  <input
                    type='text'
                    defaultValue={spotEdit.email}
                    onChange={(e) => {
                      setSpotEdit({ ...spotEdit, manager: e.target.value.trim() });
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
