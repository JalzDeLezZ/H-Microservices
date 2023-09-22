const axios = require("axios");

//! const url_conn = "http://localhost:8004/Characterx";
const url_conn = "http://database_:8004/Characterx";

module.exports = {
  list: async () => {
    const { data } = await axios.get(url_conn);
    return data;
  },
  getOne: async (id) => {
    const { data } = await axios.get(`${url_conn}/${id}`);
    return data;
  },
  create: async (character) => {
    // throw new Error("DB ERROR: Method not implemented");
    const { data } = await axios.post(
      url_conn,
      character
    );
    return data;
  },
  removexd: async (id) => {
    const { data } = await axios.delete(
      `${url_conn}/${id}`
    );
    return data;
  },
  updatexd: async (id, character) => {
    const { data } = await axios.put(
      `${url_conn}/${id}`,
      character
    );
    return data;
  },
};
