import { supabase } from 'src/libs/supabase';
import { Prefectures } from 'src/types/prefectures';

export const getPrefectures = async () => {
  const { data, error } = await supabase
    .from<Prefectures>('prefectures')
    .select('id, prefectures_name');
  if (!data) {
    return [];
  }
  if (error) {
    alert(error);
  }
  return data;
};
