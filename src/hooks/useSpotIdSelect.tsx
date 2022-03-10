import { supabase } from 'src/libs/supabase';
import { SpotId } from 'src/types/spotId';

export const getSpotsId = async (id: string) => {
  const { data, error } = await supabase.from<SpotId>('spots').select('id').eq('id', id).single();
  if (!data) {
    return;
  }
  if (error) {
    alert(error);
  }
  return data;
};
