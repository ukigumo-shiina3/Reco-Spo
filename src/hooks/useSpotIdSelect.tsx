import { supabase } from 'src/libs/supabase';
import { Spot } from 'src/types/spot';

export const getSpotsId = async (id: string) => {
  const { data, error } = await supabase.from<Spot>('spots').select('id').eq('id', id).single();
  if (!data) {
    return;
  }
  if (error) {
    alert(error);
  }
  return data;
};
