import { supabase } from 'src/libs/supabase';
import { Spot } from 'src/types/spot';
import { useState, useEffect, useMemo, useCallback } from 'react';

export const useUser = () => {
  const [adminId, setAdminId] = useState<string | null>(null);
  const session = supabase.auth.session();
  useEffect(() => {
    if (session?.user?.id) {
      console.log('session', session);
      setAdminId(session?.user?.id);
    }
  }, [session]);
  return useMemo(() => {
    return { adminId };
  }, [adminId]);
};

export const useSpot = (admin_id: string | null) => {
  const [spotList, setSpotList] = useState<Spot[] | null>(null);
  const getSpotsData = useCallback(async () => {
    // DBからスポット情報を取得　WHERE旬はareaカラムは兵庫県で絞り、admin_idカラムはadminIdで絞ってます
    const { data: spot, error } = await supabase
      .from<Spot>('spots')
      .select('*')
      .eq(`admin_id`, admin_id ?? ''); // admin_idがnullの場合は空文字を返す => stringであることを確定させる！！
    // spotデータがあればuseSateのspotDataに代入
    if (spot) {
      setSpotList(spot);
    }
  }, [admin_id]);

  useEffect(() => {
    if (!admin_id) {
      return;
    }
    getSpotsData();
  }, [admin_id, getSpotsData]);
  return useMemo(() => {
    return { spotList, getSpotsData };
  }, [spotList, getSpotsData]);
};
