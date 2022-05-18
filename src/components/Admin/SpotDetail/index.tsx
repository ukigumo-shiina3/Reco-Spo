import { useMemo, useState } from 'react';
import type { VFC } from 'react';

export const SpotDetail: VFC = () => {
  const [area, setArea] = useState('');
  const [link, setLink] = useState('');
  const [targetPerson, setTargetPerson] = useState('');
  const [usageFee, setUsageFee] = useState('');
  const [term, setTerm] = useState('');

  return useMemo(
    () => (
      <div>
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
              className='w-full p-2 rounded-md placeholder-gray-500'
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
              className='w-full p-2 rounded-md placeholder-gray-500'
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
              className='w-full p-2 rounded-md placeholder-gray-500'
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='スポット画像'>利用料</label>
            <input
              type='text'
              name='usageFee'
              value={usageFee}
              id='usageFee'
              onChange={(e) => {
                setUsageFee(e.target.value);
              }}
              placeholder='無料'
              className='w-full p-2 rounded-md placeholder-gray-500'
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='スポット画像'>期間</label>
            <input
              type='text'
              name='term'
              value={term}
              id='term'
              onChange={(e) => {
                setTerm(e.target.value);
              }}
              placeholder='最長７泊８日'
              className='w-full p-2 rounded-md placeholder-gray-500'
            />
          </div>
        </div>
      </div>
    ),
    [area, link, targetPerson, usageFee, term],
  );
};
