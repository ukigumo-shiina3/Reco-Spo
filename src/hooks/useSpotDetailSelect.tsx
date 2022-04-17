import { supabase } from 'src/libs/supabase';
import { Spot } from 'src/types/spot';

export const getSpotsDetail = async (id: string) => {
  const { data, error } = await supabase.from<Spot>('spots').select('*').eq('id', id).single();
  if (!data) {
    return {
      id: '100',
      admin_id: '200',
      prefecture_id: 'f1d7e7eb-66da-4356-8ae3-e05329f0119f',
      prefectures: {
        prefectures_name: ['石川県'],
      },
      system_id: '0e9ed988-4575-470b-af1a-e1ec8e178be3',
      systems: {
        systems_name: ['お試し暮らし'],
      },
      name: '穴水町',
      title: '自然豊かな穴水町での生活を体験してみませんか？',
      image_url: '0.055972025621181976.jpg',
      appeal:
        '世界農業遺産「能登の里山里海」に位置する石川県穴水町は美しい山と海に恵まれ、穏やかな時間が流れています。そんな穴水町の暮らしぶりを気軽に体験して頂けるように「短期移住体験住宅」をご用意いたしました。空港や駅へのアクセスも良く、暮らしやすい場所で移住体験ができます。田舎への移住をお考えの方はこの機会にぜひご利用下さい。',
      area: '石川県穴水町',
      link: 'https://test.com',
      target_person: '町外から当町への移住を希望する人物',
      usage_fee: '無料',
      term: '最長７泊８日',
      postal_code: '927-8601',
      address: '石川県鳳珠郡穴水町字川島ラの174番地',
      manager: '穴水町観光交流課',
      tel: '0768-52-3671',
      email: 'kouryu3@sec.town.anamizu.ishikawa.jp',
    };
  }
  if (error) {
    alert(error);
  }
  return data;
};
