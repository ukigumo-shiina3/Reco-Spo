import { supabase } from 'src/libs/supabase';
import { Spot } from 'src/types/spot';

export const getSpotsEdit = async () => {
  const { data, error } = await supabase.from<Spot>('spots').select('*');
  if (!data) {
    return;
  }
  if (error) {
    alert(error);
  }
  return data;
};
