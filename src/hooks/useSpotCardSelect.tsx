import { supabase } from 'src/libs/supabase';
import { Spot } from 'src/types/spot';

export const getSpots = async () => {
  const { data, error } = await supabase
    .from<Spot>('spots')
    .select('*, prefectures!inner(prefectures_name), systems!inner(systems_name)');
  if (!data) {
    return [];
  }
  if (error) {
    alert(error);
  }
  return data;
};
