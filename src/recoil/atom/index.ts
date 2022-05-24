import { atom, RecoilState } from 'recoil';
import { Admin } from 'src/types/admin';

export const adminsState: RecoilState<Admin> = atom({
  key: 'adminsState',
  default: {
    id: '',
    avatar_url: '',
    email: '',
    password: '',
    prefecture: '',
    group: '',
  },
});
// WrapSpotCardで表示するspotの条件値を納める
export const searchValue = atom({
  key: 'searchValue',
  default: {
    names: [] as string[],
    system_ids: [] as string[],
    is_data: false,
  },
});
