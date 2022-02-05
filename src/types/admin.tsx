export type Admin = {
  // avatar_url: string;
  email: string;
  password: string;
  prefecture: string;
  group: string;
  setAdmin: (admin: Admin) => void;
  handleProfileEdit: () => void;
};
