import axiosInstance from './index';
export async function register(username: string, password: string) {
  return await axiosInstance.post('/user/register', {
    username,
    password,
  });
}
