import { useState } from 'react';

export const SpotContact: React.VFC = () => {
  const [area, setArea] = useState('');
  const [link, setLink] = useState('');
  const [targetPerson, setTargetPerson] = useState('');
  const [usageFee, setUsageFee] = useState('');
  const [term, setTerm] = useState('');

  return (
    <div>
      <h2 className='mt-10'>お問い合わせ先</h2>
      <div className='mt-10 text-xs'>
        <div className='mb-5'>
          <label htmlFor='area'>郵便番号</label>
          <input
            type='text'
            name='area'
            value={area}
            id='area'
            onChange={(e) => {
              setArea(e.target.value);
            }}
            placeholder='927-8601'
            className='w-full p-2 rounded-l-md placeholder-gray-500'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='スポット画像'>住所</label>
          <input
            type='text'
            name='link'
            value={link}
            id='link'
            onChange={(e) => {
              setLink(e.target.value);
            }}
            placeholder='石川県鳳珠郡穴水町字川島ラの174番地'
            className='w-full p-2 rounded-l-md placeholder-gray-500'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='スポット画像'>名前</label>
          <input
            type='text'
            name='target_person'
            value={targetPerson}
            id='target_person'
            onChange={(e) => {
              setTargetPerson(e.target.value);
            }}
            placeholder='穴水町観光交流課'
            className='w-full p-2 rounded-l-md placeholder-gray-500'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='スポット画像'>電話番号</label>
          <input
            type='text'
            name='usageFee'
            value={usageFee}
            id='usageFee'
            onChange={(e) => {
              setUsageFee(e.target.value);
            }}
            placeholder='0768-52-3671'
            className='w-full p-2 rounded-l-md placeholder-gray-500'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='スポット画像'>メールアドレス</label>
          <input
            type='text'
            name='term'
            value={term}
            id='term'
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            placeholder='test@gmai.com'
            className='w-full p-2 rounded-l-md placeholder-gray-500'
          />
          <div className='text-center pb-10'>
            <button className=' px-4 py-2 mt-10 mx-6 text-white bg-blue-300 rounded-lg'>
              投稿する
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
