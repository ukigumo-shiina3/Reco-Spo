import { supabase } from 'src/libs/supabase';
import { Spot } from 'src/types/spotData';

export const getSpots = async () => {
  const { data, error } = await supabase
    .from<Spot>('spots')
    .select('*, prefectures!inner(prefectures_name), systems!inner(systems_name)');

  if (!data) {
    return []; // @topic エラーの時は一旦空を返しておく
  }

  if (error) {
    alert(error);
  }

  return data;
};
