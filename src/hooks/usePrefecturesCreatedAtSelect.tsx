import { supabase } from 'src/libs/supabase';
import { PrefecturesCreatedAt } from 'src/types/prefecturesCreatedAt';

export const getPrefecturesCreatedAt = async () => {
  const { data, error } = await supabase
    .from<PrefecturesCreatedAt>('prefectures_created_at_view')
    .select('*');
  console.log(data);
  if (!data) {
    return [];
  }
  if (error) {
    alert(error);
  }
  return data;
};
