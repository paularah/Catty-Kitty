/*
getBreed funcion connects to the cat API, query a random number between 1 and 4
for differnt page and returns a page listing diffrent kind of cat breeds.
*/
const axios = require("axios");

const getBreed = () => {
  // randomly generated num >1 < 4 for quering page in the API
  let page = Math.floor(Math.random() * 4 + 1);
  const url = `https://catfact.ninja/breeds?page=${page}`;
  axios
    .get(url)
    .then(response => {
      for (let each of response.data.data) {
        console.log("--------------------------------------");
        console.log(JSON.stringify(each, undefined, 2));
      }
    })
    .catch(e => {
      if (e === "ENOTFOUND") {
        console.log("Unable to connect to cat API servers");
      } else {
        console.log(e);
      }
    });
};

module.exports.getBreed = getBreed;
