import { supabase } from 'src/libs/supabase';
import { Spot } from 'src/types/spot';

export const getSpots = async (sv) => {
  console.log('sv:' + sv);
  sv = {
    names: [`岡山県`],
    // names: [],
    system_ids: [`お試し暮らし`],
    // system_ids: [],
    ...sv,
  };
  if (sv) {
    console.log('sv:' + sv);
    const { data: resultSpots, error } = await supabase
      .from<any>('spots')
      .select('*, prefectures!inner(prefectures_name), systems!inner(systems_name)')
      .in('prefectures.prefectures_name', sv.names)
      .in('systems.systems_name', sv.system_ids);
    if (!resultSpots) {
      return [];
    }
    if (error) {
      alert(error);
    }
    console.log('svあるほう');

    return resultSpots;
  } else {
    const { data: resultSpots, error } = await supabase
      .from<Spot>('spots')
      .select('*, prefectures!inner(prefectures_name), systems!inner(systems_name)');
    if (!resultSpots) {
      return [];
    }
    if (error) {
      alert(error);
    }
    console.log('svないほう');
    console.log(resultSpots);

    return resultSpots;
  }
};
