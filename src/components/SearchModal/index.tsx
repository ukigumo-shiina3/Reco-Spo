/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useCallback, useEffect, useMemo, useState, VFC } from 'react';
import { getPrefectures } from 'src/hooks/usePostPrefectureSelect';
import { getSystems } from 'src/hooks/useSystemSelect';
import { SearchButton } from '../Button/SearchButton';
import { supabase } from 'src/libs/supabase';
import { Prefectures } from 'src/types/prefectures';
import { Systems } from 'src/types/systems';
import { useSelectSpots } from 'src/hooks/useSpotIdSelect';

const user = supabase.auth.user();

export const SearchModal: VFC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [prefectures_name, setPrefecturesName] = useState<Prefectures[]>([]);
  const [systems_name, setSystemsName] = useState<Systems[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false);
  const { getSpots, selectSpots } = useSelectSpots();
  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);
  getSpots();
  console.log(selectSpots);

  const closeModal = useCallback(() => {
    // setPrefecturesName([]);
    // setSystemsName([]);
    setIsOpen(false);
  }, []);

  const fetchPrefecturesListName = useCallback(async () => {
    try {
      const data = await getPrefectures();
      setPrefecturesName(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, [setPrefecturesName]);

  useEffect(() => {
    fetchPrefecturesListName();
  }, [user, fetchPrefecturesListName]);

  const fetchSystemsListName = useCallback(async () => {
    try {
      const data = await getSystems();
      setSystemsName(data);
    } catch (error) {
      setError(true);
    }
  }, []);

  // 絞り込みボタン
  const doSearch = () => {
    closeModal();
  };

  useEffect(() => {
    fetchSystemsListName();
  }, [user, fetchSystemsListName]);

  return useMemo(
    () => (
      <>
        <div className='p-2 mt-8 cursor-pointer font-bold' onClick={openModal}>
          <SearchButton />
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

                  <div className='mt-8'>
                    <button className='text-md text-center bg-red-400 rounded-lg text-white py-4 px-8 border-2'>
                      都道府県
                    </button>
                  </div>
                  <div className='mt-4 flex flex-wrap gap-3'>
                    {prefectures_name.map((value, index) => (
                      <option
                        className='border-2 rounded-lg border-gray-300 py-2 px-4'
                        key={index}
                        value={value['id']}
                      >
                        {value['prefectures_name']}
                      </option>
                    ))}
                  </div>
                  <div className='mt-12'>
                    <button className='text-md text-center bg-red-400 rounded-lg text-white py-4 px-8'>
                      制度
                    </button>
                  </div>
                  <div className='mt-4 flex flex-wrap gap-3'>
                    {systems_name.map((value, index) => (
                      <option
                        className='border-2 rounded-lg border-gray-300 py-2 px-4'
                        key={index}
                        value={value['id']}
                      >
                        {value['systems_name']}
                      </option>
                    ))}
                  </div>
                  <div className='flex justify-center mt-12'>
                    <button
                      className='text-md text-center bg-blue-400 rounded-lg text-white py-4 px-8'
                      onClick={doSearch}
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
    ),
    [isOpen, closeModal, prefectures_name, systems_name],
  );
};

export default SearchModal;
