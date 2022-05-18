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
