import { supabase } from 'src/libs/supabase';
import { SearchWords } from 'src/types/searchWords';
import { Spot } from 'src/types/spot';

// systemsを検索してスポットを取得
const getSystemSearchSpots = async (searchWords: { system_ids: string[] }) => {
  console.log('制度名のみ');
  console.log('制度名：' + searchWords.system_ids);
  const { data, error } = await supabase
    .from<any>('spots')
    .select('*, prefectures!inner(prefectures_name), systems!inner(systems_name)')
    .in('system_id', searchWords.system_ids);
  if (!data) {
    return [];
  }
  if (error) {
    alert(error);
  }
  console.log('data', data);

  return data;
};
// prefecturesを検索してスポットを取得
const getPrefectureSearchSpots = async (searchWords: { names: string[] }) => {
  console.log('県名のみ');
  console.log('県名', searchWords.names);
  const { data, error } = await supabase
    .from<any>('spots')
    .select('*, prefectures!inner(prefectures_name), systems!inner(systems_name)')
    .in('prefecture_id', searchWords.names);
  if (!data) {
    return [];
  }
  if (error) {
    alert(error);
  }
  console.log('data', data);

  return data;
};
// prefecturesとsystemsを検索してスポットを取得
const getPSSearchSpots = async (searchWords: { system_ids: string[]; names: string[] }) => {
  console.log('制度名も県名もある');
  console.log('制度名も県名もある', searchWords.system_ids, searchWords.names);
  const { data, error } = await supabase
    .from<any>('spots')
    .select('*, prefectures!inner(prefectures_name), systems!inner(systems_name)')
    .in('prefecture_id', searchWords.names)
    .in('system_id', searchWords.system_ids);
  if (!data) {
    return [];
  }
  if (error) {
    alert(error);
  }
  console.log('data', data);

  return data;
};
// 全てのスポットを取得
const getAllSpots = async () => {
  console.log('県名も制度名もない');
  const { data, error } = await supabase
    .from<Spot>('spots')
    .select('*, prefectures!inner(prefectures_name), systems!inner(systems_name)');
  if (!data) {
    return [];
  }
  if (error) {
    alert(error);
  }
  console.log('data', data);

  return data;
};

export const getSpots = async (searchWords?: SearchWords) => {
  // searchWordsが無い場合
  if (!searchWords) {
    return getAllSpots();
  }
  // searchWordsがある場合
  // searchWordsがあるが中身が空の場合
  if (searchWords.names.length === 0 && searchWords.system_ids.length === 0) {
    return getAllSpots();
  }
  // prefecturesだけ値がある場合
  else if (searchWords.names.length > 0 && searchWords.system_ids.length === 0) {
    return getPrefectureSearchSpots(searchWords);
  }
  // systemsだけ値がある場合
  else if (searchWords.names.length === 0 && searchWords.system_ids.length > 0) {
    return getSystemSearchSpots(searchWords);
  }
  // prefecturesとsystems両方値がある場合
  else if (searchWords.names.length > 0 && searchWords.system_ids.length > 0) {
    return getPSSearchSpots(searchWords);
  }
};
