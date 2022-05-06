import { supabase } from 'src/libs/supabase';
import { SystemsCreatedAt } from 'src/types/systemsCreatedAt';

export const getSystemsCreatedAt = async () => {
  const { data, error } = await supabase
    .from<SystemsCreatedAt>('systems_created_at')
    .select('*')
    .order('created_at', { ascending: true });
  if (!data) {
    return [];
  }
  if (error) {
    alert(error);
  }
  return data;
};
