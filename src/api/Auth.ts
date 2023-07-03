import axios from "axios";

export const login = async (username: string, password: string) => {
  const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
    username,
    password,
  });
  return response.data;
};

export const register = async (username: string, password: string) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/register`,
    {
      username,
      password,
    }
  );
  return response.data;
};

export const logout = async () => {};

export const changePassword = async (
  oldPassword: string,
  newPassword: string
) => {};
