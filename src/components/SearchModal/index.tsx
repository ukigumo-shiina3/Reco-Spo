/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, SetStateAction, useCallback, useEffect, useMemo, useState, VFC } from 'react';
import { getPrefectures } from 'src/hooks/usePostPrefectureSelect';
import { getSystems } from 'src/hooks/useSystemSelect';
import { SearchButton } from '../Button/SearchButton';
import { Prefectures } from 'src/types/prefectures';
import { Systems } from 'src/types/systems';
import { Button, Chip, Chips, createStyles } from '@mantine/core';
import { useSetRecoilState } from 'recoil';
import { searchValue } from 'src/recoil/atom';
import { GrUpdate } from 'react-icons/gr';
import { GoSearch } from 'react-icons/go';

export const SearchModal: VFC = () => {
  // マンタインのChipsに必要な関数追加分ここから
  const useStyles = createStyles((theme, _params, getRef) => ({
    iconWrapper: {
      ref: getRef('iconWrapper'),
    },
    checked: {
      backgroundColor: `${theme.colors.blue[6]} !important`,
      color: theme.white,
      [`& .${getRef('iconWrapper')}`]: {
        color: theme.white,
      },
    },
  }));
  const { classes } = useStyles();
  // マンタインのChipsに必要な関数追加分ここまで
  // Recoilから県と制度のINDEXを格納するためのsetterを取得する
  const setSearchWords = useSetRecoilState(searchValue);
  //  モーダルの表示状態を格納するためのstateを取得する
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // 県名を格納するためのstateを取得する
  const [prefectures_name, setPrefecturesName] = useState<Prefectures[]>([]);
  // 制度名を格納するためのstateを取得する
  const [systems_name, setSystem_name] = useState<Systems[]>([]);
  //  県名のINDEXを格納するためのstateを取得する
  const [prefecturesIndex, setPrefecturesIndex] = useState<Prefectures['prefectures_index'][]>([]);
  //  制度名のINDEXを格納するためのstateを取得する
  const [systemIndex, setSystemIndex] = useState<Systems['systems_index'][]>([]);
  // モーダルを表示する
  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);
  // モーダルを閉じる
  const closeModal = useCallback(() => {
    setWordBlank();
    setIsOpen(false);
  }, []);
  // 検索を実行する
  const handleSearch = useCallback(() => {
    console.log('pushpush');
    isTrueSetWords(prefecturesIndex, systemIndex);
    setWordBlank();
    closeModal();
  }, [prefecturesIndex, systemIndex]);
  // 全spotdata取得/元に戻すボタン
  const resetSpots = useCallback(async () => {
    setSearchWords({
      names: [],
      system_ids: [],
      is_data: false,
    });
  }, []);
  // 　モーダルに表示する県名を取得
  const fetchPrefecturesListName = useCallback(async () => {
    try {
      const data = await getPrefectures();
      console.log(data);

      setPrefecturesName(data);
    } catch (error) {
      //  error処理
    }
    // １度だけ読み込めばいい
  }, []);
  // モーダルに表示する制度名を取得
  const fetchSystemsListName = useCallback(async () => {
    try {
      const data = await getSystems();
      console.log(data);

      setSystem_name(data);
    } catch (error) {
      // error処理
    }
    // １度だけ読み込めばいい
  }, []);

  // 初期表示時にfetchPrefecturesListNameを実行
  useEffect(() => {
    fetchPrefecturesListName();
  }, []);
  // 初期表示時にfetchSystemsListNameを実行
  useEffect(() => {
    fetchSystemsListName();
  }, []);

  // prefecturesとsystemsの中身を空にする
  const setWordBlank = () => {
    setPrefecturesIndex([]);
    setSystemIndex([]);
  };
  // 選択した制度名のINDEXを取得する
  const getSystemIndex = (e: SetStateAction<string[]>) => {
    setSystemIndex(e);
  };
  // 選択した県名のINDEXを取得する
  const getPrefectureIndex = (e: SetStateAction<string[]>) => {
    setPrefecturesIndex(e);
  };

  console.log('systems', systemIndex);
  console.log('systems', systemIndex.length);
  console.log(`prefectures`, prefecturesIndex);
  console.log(`prefectures`, prefecturesIndex.length);
  // 県名と制度名が１つでもあればrecoilに値をセットする
  const isTrueSetWords = (prefectures: string[], systems: string[]) => {
    if (prefectures.length > 0 || systems.length > 0) {
      setSearchWords({
        names: prefectures,
        system_ids: systems,
        is_data: true,
      });
      console.log('true');
    } else {
      console.log('false');
    }
  };

  return (
    <>
      <div className='flex justify-end'>
        <div className='p-2 mt-8 cursor-pointer font-bold'>
          <div
            className='inline-block  px-4 py-2 md:px-5 md:py-3 mx-auto text-white bg-blue-600 rounded-full hover:bg-blue-700 md:mx-0'
            onClick={resetSpots}
          >
            <span className='flex items-center'>
              <GrUpdate />
              　元に戻す
            </span>
          </div>
          <div
            className='ml-4 inline-block px-4 py-2 md:px-5 md:py-3 mx-auto text-white bg-blue-600 rounded-full hover:bg-blue-700 md:mx-0'
            onClick={openModal}
          >
            <span className='flex items-center'>
              <GoSearch />
              　絞り込む
            </span>
          </div>
        </div>
        {/* <div className='p-2 mt-8 cursor-pointer font-bold' onClick={openModal}>
          <SearchButton />
        </div> */}
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='fixed inset-0 z-10 overflow-y-auto' onClose={closeModal}>
          <div className='min-h-screen px-4 text-center border-2'>
            <span className='inline-block h-screen align-middle' aria-hidden='true'>
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='inline-block w-full max-w-md p-8 my-8 overflow-hidden text-left align-middle transition-all transform border border-gray-300 shadow-xl bg-gray-50 rounded-xl'>
                <div className='flex justify-center border-b-4 border-gray-400'>
                  <div className=''>
                    <Dialog.Title
                      as='h3'
                      className='text-2xl text-center font-medium leading-6 text-gray-900 pb-10 mt-8'
                    >
                      絞り込み検索
                    </Dialog.Title>
                  </div>
                  <div className='w-16 pl-8 mt-8'>
                    <button className='' onClick={closeModal}>
                      <div className=''>
                        <img
                          src='/icons/close-icon.png'
                          alt='クローズアイコン'
                          className='m-auto w-8 h-8 ml-8'
                        />
                      </div>
                    </button>
                  </div>
                </div>

                <div className='mt-8 text-center'>
                  <button className='text-md text-center bg-red-400 rounded-lg text-white py-4 px-8 border-2'>
                    都道府県
                  </button>
                </div>
                <div className='mt-4 flex flex-wrap gap-3'>
                  <Chips
                    position='center'
                    multiple
                    classNames={classes}
                    onChange={getPrefectureIndex}
                  >
                    {prefectures_name.map((value, index) => (
                      <Chip value={value['prefectures_index']} key={index}>
                        {value['prefectures_name']}
                      </Chip>
                    ))}
                  </Chips>
                </div>
                <div className='mt-12 text-center'>
                  <button className='text-md text-center bg-red-400 rounded-lg text-white py-4 px-8'>
                    制度
                  </button>
                </div>
                <div className='mt-4 flex flex-wrap gap-3'>
                  <Chips position='center' multiple classNames={classes} onChange={getSystemIndex}>
                    {systems_name.map((value, index) => (
                      <Chip value={value['systems_index']} key={index}>
                        {value['systems_name']}
                      </Chip>
                    ))}
                  </Chips>
                </div>
                {console.log('個数', systemIndex.length + prefecturesIndex.length)}
                <div className='flex justify-center mt-12'>
                  <button
                    className='text-md text-center bg-blue-400 rounded-lg text-white py-4 px-8'
                    onClick={handleSearch}
                    disabled={systemIndex.length === 0 && prefecturesIndex.length === 0}
                  >
                    絞り込む
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SearchModal;
