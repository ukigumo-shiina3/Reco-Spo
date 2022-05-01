import { supabase } from 'src/libs/supabase';
import { PrefecturesCreatedAt } from 'src/types/prefecturesCreatedAt';

export const getPrefecturesCreatedAt = async () => {
  const { data, error } = await supabase
    .from<PrefecturesCreatedAt>('prefectures_created_at')
    .select('*')
    .order('created_at', { ascending: true });
  if (!data) {
    return [];
  }
  if (error) {
    alert(error);
  }
  return data;
};
