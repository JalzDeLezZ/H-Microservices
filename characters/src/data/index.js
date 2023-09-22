const axios = require("axios");

// DB simulation

module.exports = {
  list: async () => {
    const { data } = await axios.get("http://localhost:8004/Characterx");
    return data;
  },
  getOne: async (id) => {
    const { data } = await axios.get(`http://localhost:8004/Characterx/${id}`);
    return data;
  },
  create: async (character) => {
    // throw new Error("DB ERROR: Method not implemented");
    const { data } = await axios.post(
      "http://localhost:8004/Characterx",
      character
    );
    return data;
  },
  removexd: async (id) => {
    const { data } = await axios.delete(
      `http://localhost:8004/Characterx/${id}`
    );
    return data;
  },
  updatexd: async (id, character) => {
    const { data } = await axios.put(
      `http://localhost:8004/Characterx/${id}`,
      character
    );
    return data;
  },
};
