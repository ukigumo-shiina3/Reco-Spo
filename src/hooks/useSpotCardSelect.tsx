import { supabase } from 'src/libs/supabase';
import { SpotData } from 'src/types/spotData';

export const getSpots = async () => {
  const { data, error } = await supabase.from<SpotData>('spots').select('*');
  if (!data) {
    return;
  }
  if (error) {
    alert(error);
  }
  return data;
};
