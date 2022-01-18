import { supabase } from 'src/libs/supabase';
import { Category } from 'src/types/Category';

export const getCategory = async () => {
  const { data, error } = await supabase
    .from<Category>('spots')
    .select('prefecture_id (prefectures_name), system_id(systems_name)');
  if (!data) {
    return;
  }
  if (error) {
    alert(error);
  }
  return data;
};
