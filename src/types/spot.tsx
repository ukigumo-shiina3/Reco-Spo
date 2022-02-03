export type Spot = {
  id: string;
  address: string;
  admin_id: string;
  appeal: string;
  area: string;
  created_at: string;
  email: string;
  image_url: string;
  link: string;
  manager: string;
  name: string;
  postal_code: string;
  prefecture_id: string;
  prefectures: {
    prefectures_name: string;
  };
  system_id: string;
  systems: {
    systems_name: string;
  };
  target_person: string;
  tel: string;
  term: string;
  title: string;
  updated_at: string;
  usage_fee: string;
};
