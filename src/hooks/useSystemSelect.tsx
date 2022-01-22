import { supabase } from 'src/libs/supabase';

export const getSystems = async () => {
  const { data, error } = await supabase.from('systems').select('id, systems_name');
  if (error) {
    alert(error);
  }
  return data;
};
