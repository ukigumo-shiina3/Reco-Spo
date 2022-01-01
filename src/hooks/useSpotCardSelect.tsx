import { supabase } from 'src/libs/supabase';

export const getSpots = async () => {
  const { data, error } = await supabase.from('spots').select('*');
  if (!data) {
    return;
  }
  if (error) {
    alert(error);
  }
  return data;
};
