import { supabase } from 'src/libs/supabase';

export const getCategory = async () => {
  const { data, error } = await supabase
    .from<any>('spots')
    .select('prefecture_id (prefectures_name), system_id(systems_name)');
  if (!data) {
    return;
  }
  if (error) {
    alert(error);
  }
  return data;
};
