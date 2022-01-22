import { Dialog, Transition } from '@headlessui/react';
import { Button, IconX } from '@supabase/ui';
import { Fragment, useCallback, useEffect, useState, VFC } from 'react';
import { getPrefectures } from 'src/hooks/usePrefectureSelect';
import { getSystems } from 'src/hooks/useSystemSelect';
import { SearchButton } from '../Button/SearchButton';

const SearchModal: VFC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [prefectures_name, setPrefecturesName] = useState([]);
  const [systems_name, setSystemsName] = useState([]);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setPrefecturesName([]);
    setSystemsName([]);
    setIsOpen(false);
  }, []);

  const fetchPrefecturesListName = useCallback(async () => {
    const data: string[] | null = await getPrefectures();
    setPrefecturesName(data || []);
  }, [setPrefecturesName]);

  useEffect(() => {
    fetchPrefecturesListName();
  }, [fetchPrefecturesListName]);

  const fetchSystemsListName = useCallback(async () => {
    const data: string[] | null = await getSystems();
    setSystemsName(data || []);
  }, [setSystemsName]);

  useEffect(() => {
    fetchSystemsListName();
  }, [fetchSystemsListName]);

  return (
    <>
      <div className='p-2 border cursor-pointer font-bold' onClick={openModal}>
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
              <div className='inline-block w-full sm:w-96 max-w-md py-8 px-16 my-8 overflow-hidden text-left align-middle transition-all transform border border-gray-300 shadow-xl bg-gray-50 rounded-xl'>
                <div className='flex'>
                  <div className=''>
                    <Dialog.Title
                      as='h3'
                      className='text-2xl font-medium leading-6 text-center text-gray-900 pb-10'
                    >
                      絞り込み検索
                    </Dialog.Title>
                  </div>
                  <div className='w-16 pl-8'>
                    <Button
                      block
                      type='default'
                      size='large'
                      icon={<IconX />}
                      onClick={closeModal}
                    ></Button>
                  </div>
                </div>

                <div className='mt-4'>
                  <button className='text-md text-center bg-red-400 rounded-l-md text-white py-4 px-8 border-2'>
                    都道府県
                  </button>
                </div>
                <div className='mt-4 flex flex-wrap gap-3'>
                  {prefectures_name.map((value) => (
                    <option key={value} value={value['id']}>
                      {value['prefectures_name']}
                    </option>
                  ))}
                </div>
                <div className='mt-4'>
                  <button className='text-md text-center bg-red-400 rounded-l-md text-white py-4 px-8'>
                    制度
                  </button>
                </div>
                <div className='mt-4 flex flex-wrap gap-3'>
                  {systems_name.map((value) => (
                    <option key={value} value={value['id']}>
                      {value['systems_name']}
                    </option>
                  ))}
                </div>
                <div className='flex justify-center mt-4'>
                  <div className='w-32 p-2'>
                    <Button block size='large'>
                      絞り込む
                    </Button>
                  </div>
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
