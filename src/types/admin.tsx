export type Admin = {
  email: string;
  password: string;
  // avatar_url: string;
  prefecture: string;
  group: string;
  setPrefecture: (prefecture: string) => void;
  setGroup: (group: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleProfileEdit: () => void;
};
