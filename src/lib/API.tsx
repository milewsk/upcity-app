import axios, { AxiosResponse } from "axios";

const baseURL: string = "";

//Currently using: axios
const client = axios.create({ baseURL: baseURL });

const API = {
  get: async (URL: string) => {
    return await client
      .get(URL)
      .then((response) => {})
      .catch((error) => {});
  },

  post: async (URL: string, data: Object) => {
    return await client
      .post(URL, data)
      .then((response) => {})
      .catch((error) => {});
  },

  delete: async (URL: string) => {
    return await client
      .delete(URL)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  put: async (URL: string, data: Object) => {
    return await client
      .put(URL, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default API;
