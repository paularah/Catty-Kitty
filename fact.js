/*
The get fact functions defined below connects to the cat API found at https://catfact.ninja/
and return facts about cats fecthed from the API. This function is called in the
main app.js file.
*/

// axios node module
const axios = require("axios");

const getFacts = limit => {
  let url;
  if (limit && typeof limit != "number") {
    throw new Error("Fact number must be an interger!");
  } else if (!limit || limit < 1) {
    url = "https://catfact.ninja/facts?";
  } else {
    url = `https://catfact.ninja/facts?limit=${limit}`;
  }
  axios
    .get(url)
    .then(response => {
      for (let each of response.data.data) {
        console.log("------------------------------------------");
        console.log(each.fact);
      }
    })
    .catch(e => {
      if (e.code === "ENOTFOUND") {
        console.log("Unable to connect to cat API.");
      } else {
        console.log(e);
      }
    });
};

module.exports.getFacts = getFacts;
// console.log(response.data.data[0].fact);
