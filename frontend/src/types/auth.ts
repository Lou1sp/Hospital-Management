export type RegisterDTO = {
  email: string;
  user_name: string;
  password: string;
  phone_num: string;
  DOB: string;
};

export type LoginDTO = {
  email: string;
  password: string;
}