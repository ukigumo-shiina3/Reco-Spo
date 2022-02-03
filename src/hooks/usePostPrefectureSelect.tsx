import { supabase } from 'src/libs/supabase';

export const getPrefectures = async () => {
  const { data, error } = await supabase.from('prefectures').select('id, prefectures_name');
  if (error) {
    alert(error);
  }
  return data;
};
