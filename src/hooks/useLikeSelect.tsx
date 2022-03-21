import { supabase } from 'src/libs/supabase';
import { Like } from 'src/types/like';

export const getLikeId = async (id: string) => {
  const { data, error } = await supabase.from<Like>('likes').select('id').eq('id', id).single();
  if (!data) {
    return { id: '', user_id: '', spot_id: '' };
  }
  if (error) {
    alert(error);
  }
  return data;
};
