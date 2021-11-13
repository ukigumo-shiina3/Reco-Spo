import { useState } from 'react';

export const SpotInfo: React.VFC = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [prefecture, setPrefecture] = useState('');
  const [system, setSystem] = useState('');

  return (
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
              setName(e.target.value);
            }}
            placeholder='石川県穴水町'
            className='w-full p-2  rounded-l-md placeholder-gray-500'
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
              setTitle(e.target.value);
            }}
            placeholder='自然豊かな穴水町での生活を体験してみませんか'
            className='w-full p-2  rounded-l-md placeholder-gray-500'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='prefecture'>都道府県</label>
          <input
            type='text'
            name='prefecture'
            value={prefecture}
            id='prefecture'
            onChange={(e) => {
              setPrefecture(e.target.value);
            }}
            placeholder='都道府県を選択してください'
            className='w-full p-2  rounded-l-md placeholder-gray-500'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='system'>スポット名</label>
          <input
            type='text'
            name='system'
            value={system}
            id='system'
            onChange={(e) => {
              setSystem(e.target.value);
            }}
            placeholder='カテゴリを選択してください'
            className='w-full p-2  rounded-l-md placeholder-gray-500'
          />
        </div>
      </div>
    </div>
  );
};
