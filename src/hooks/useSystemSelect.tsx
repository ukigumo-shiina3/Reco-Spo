import { supabase } from 'src/libs/supabase';
import { Systems } from 'src/types/systems';

export const getSystems = async () => {
  const { data, error } = await supabase.from<Systems>('systems').select('id, systems_name');
  if (error) {
    alert(error);
  }
  return data;
};
