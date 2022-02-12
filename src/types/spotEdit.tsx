export type SpotEdit = {
  id: string;
  address: string;
  appeal: string;
  area: string;
  email: string;
  link: string;
  manager: string;
  name: string;
  postal_code: string;
  prefecture_id: string;
  prefectures: {
    prefectures_name: string[];
  };
  system_id: string;
  systems: {
    systems_name: string[];
  };
  target_person: string;
  tel: string;
  term: string;
  title: string;
  usage_fee: string;
  // spot: null;
};
