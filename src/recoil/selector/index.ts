import { RecoilState, selector } from 'recoil';
import { supabase } from 'src/libs/supabase';
import { Spot } from 'src/types/spot';
import { adminsState, searchValue } from '../atom';

export const adminIdState: RecoilState<string> = selector({
  key: 'adminIdState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const admins = get(adminsState);
    return admins.id;
  },
  set: ({ set, get }, newValue) => {
    const admins = get(adminsState);
    set(adminsState, { ...admins, id: newValue ? newValue.toString() : '' });
  },
});

export const avatarUrlState: RecoilState<string> = selector({
  key: 'avatarUrlState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const admins = get(adminsState);
    return admins.avatar_url;
  },
  set: ({ set, get }, newValue) => {
    const admins = get(adminsState);
    set(adminsState, { ...admins, avatar_url: newValue ? newValue.toString() : '' });
  },
});

export const emailState: RecoilState<string> = selector({
  key: 'emailState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const admins = get(adminsState);
    return admins.email;
  },
  set: ({ set, get }, newValue) => {
    const admins = get(adminsState);
    set(adminsState, { ...admins, email: newValue ? newValue.toString() : '' });
  },
});

export const passwordState: RecoilState<string> = selector({
  key: 'passwordState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const admins = get(adminsState);
    return admins.password;
  },
  set: ({ set, get }, newValue) => {
    const admins = get(adminsState);
    set(adminsState, { ...admins, password: newValue ? newValue.toString() : '' });
  },
});

export const prefectureState: RecoilState<string> = selector({
  key: 'prefectureState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const admins = get(adminsState);
    return admins.prefecture;
  },
  set: ({ set, get }, newValue) => {
    const admins = get(adminsState);
    set(adminsState, { ...admins, prefecture: newValue ? newValue.toString() : '' });
  },
});

export const groupState: RecoilState<string> = selector({
  key: 'groupState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const admins = get(adminsState);
    return admins.group;
  },
  set: ({ set, get }, newValue) => {
    const admins = get(adminsState);
    set(adminsState, { ...admins, group: newValue ? newValue.toString() : '' });
  },
});

// WrapSpotCardで表示するspotの式
// 非同期処理を含むものは現状普通に利用しようとすると対応していないので今回はselectorやめときます
// export const getSearchSpots = selector({
//   key: 'getSearchSpots',
//   get: async ({ get }) => {
//     const sv = get(searchValue);
//     const { data: resultSpots, error } = await supabase
//       .from<Spot>('spots')
//       .select('*, prefectures!inner(prefectures_name), systems!inner(systems_name)')
//       .in('name', sv.names)
//       .in('system_id', sv.system_ids);

//     if (!resultSpots) {
//       return [];
//     }
//     if (error) {
//       alert(error);
//     }
//     return resultSpots;
//   },
// });
