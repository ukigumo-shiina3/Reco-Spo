import { Dialog, Transition } from '@headlessui/react';
import { Button, IconX } from '@supabase/ui';
import { Fragment, useCallback, useState, VFC } from 'react';
import { supabase } from 'src/libs/supabase';
import { SearchButton } from '../Button/SearchButton';

const SearchModal: VFC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [prefecture, setPrefecture] = useState<string>('');
  const [system, setSystem] = useState<string>('');

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setPrefecture('');
    setSystem('');
    setIsOpen(false);
  }, []);

  return (
    <>
      <div className='p-2 border cursor-pointer' onClick={openModal}>
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
              <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform border border-gray-300 shadow-xl bg-gray-50 rounded-xl'>
                <Dialog.Title
                  as='h3'
                  className='text-2xl font-medium leading-6 text-center text-gray-900'
                >
                  絞り込み検索
                </Dialog.Title>
                <div className='grid grid-cols-4 gap-2 mt-4'>
                  <div className='col-span-1 text-xl text-center'>都道府県</div>
                  <input
                    className='w-full h-10 col-span-3 p-2 bg-white border border-gray-300 rounded shadow appearance-none hover:border-gray-700'
                    value={prefecture}
                    onChange={(e) => {
                      return setPrefecture(e.target.value);
                    }}
                  />
                </div>
                <div className='grid grid-cols-4 gap-2 mt-4'>
                  <div className='col-span-1 text-xl text-center'>制度</div>
                  <input
                    className='w-full h-10 col-span-3 p-2 bg-white border border-gray-300 rounded shadow appearance-none hover:border-gray-700'
                    value={system}
                    onChange={(e) => {
                      return setSystem(e.target.value);
                    }}
                  />
                </div>
                <div className='flex justify-center mt-4'>
                  <div className='w-32 p-2'>
                    <Button block type='default' size='large' icon={<IconX />} onClick={closeModal}>
                      閉じる
                    </Button>
                  </div>
                  <div className='w-32 p-2'>
                    <Button block size='large'>
                      検索
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
