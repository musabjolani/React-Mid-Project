import axios from "axios";

const baseURL = "http://localhost:3300";

const getAll = (url) => {
  return axios.get(url);
};

const addData = async (url, data) => {
  return await axios.post(url, data);
};

const updateById = async (url, data) => {
  await axios.put(url, data);
};
const deleteById = async (url, id) => {
  await axios.delete(url, id);
};

export { baseURL, getAll, addData, updateById, deleteById };
