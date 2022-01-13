import { supabase } from 'src/libs/supabase';
import { Spot } from 'src/types/spot';

export const getSpotsDetail = async (id: string) => {
  const { data, error } = await supabase.from<Spot>('spots').select('*').eq('id', id);
  if (!data) {
    return;
  }
  if (error) {
    alert(error);
  }
  return data;
};