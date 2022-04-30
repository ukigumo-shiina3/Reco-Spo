import { useState } from 'react';
import type { VFC } from 'react';

export const SpotExplain: VFC = () => {
  const [appeal, setAppeal] = useState('');

  return (
    <div>
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
            className='w-full h-24 p-2 rounded-md placeholder-gray-500'
          />
        </div>
      </div>
    </div>
  );
};
