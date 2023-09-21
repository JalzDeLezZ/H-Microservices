const axios = require("axios");

// DB simulation

module.exports = {
  list: async () => {
    const { data } = await axios.get("http://localhost:8004/Character");
    return data;
  },
  getOne: async (id) => {
    const { data } = await axios.get(`http://localhost:8004/Character/${id}`);
    return data;
  },
  create: async (character) => {
    // throw new Error("DB ERROR: Method not implemented");
    const { data } = await axios.post("http://localhost:8004/Character", character);
    return data;
  },
};
