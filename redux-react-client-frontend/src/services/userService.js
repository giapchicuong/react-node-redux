import axios from "../setup/axios";

const getAllUser = () => {
  return axios.get(`/users/all`);
};

const createNewUser = (userData) => {
  return axios.post(`/users/create`, { ...userData });
};

const deleteUser = (id) => {
  return axios.post(`/users/delete/${id}`);
};

export { getAllUser, createNewUser, deleteUser };
