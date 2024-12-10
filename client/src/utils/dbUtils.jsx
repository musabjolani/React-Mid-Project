import axios from "axios";

const baseURL = "http://localhost:3300";

const getAll = (url) => {
  return axios.get(url);
};

const updateById = async (url, data) => {
  await axios.put(url, data);
};
export { baseURL, getAll, updateById };
