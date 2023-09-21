const server = require("./src/server");

const { Character, Film } = require("./src/database");
// ↓↓↓ TESTS ↓↓↓

server.listen(8004, () => {
  console.log("Database server is running on port 8004");
});

/* ↑↑↑
Film.list().then((characters) => console.log(characters[0]));

Character.list().then((characters) => console.log(characters[0]));

Character.gett(2).then((characters) => console.log(characters));

Character.insert({
  _id: "300",
  name: "James Jalz",
  height: "172",
  mass: "77",
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "2000",
  gender: "male",
  homeworld: "1",
  films: ["1", "2", "3", "6"],
}).then((character) => console.log(character));

*/
