export type Spot = {
  id: string;
  prefecture_id: string;
  prefectures: {
    prefectures_name: string[];
  };
  system_id: string;
  systems: {
    systems_name: string[];
  };
  name: string;
  title: string;
  image_url: string;
  appeal: string;
  area: string;
  link: string;
  target_person: string;
  usage_fee: string;
  term: string;
  postal_code: string;
  address: string;
  manager: string;
  tel: string;
  email: string;
};
