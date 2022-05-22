import { supabase } from 'src/libs/supabase';
import { Systems } from 'src/types/systems';

export const getSystems = async () => {
  const { data, error } = await supabase
    .from<Systems>('systems')
    .select('systems_index, systems_name');
  if (!data) {
    return [];
  }
  if (error) {
    alert(error);
  }
  return data;
};
