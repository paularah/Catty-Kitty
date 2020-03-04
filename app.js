/*
Node CLI app for learning about cats through interecting with cat API
*/

//node external modules
const yargs = require("yargs");

// project files
const breed = require("./breed");
const fact = require("./fact");
// yarg configurations
const argv = yargs
  .options({
    f: {
      demand: false,
      alias: "facts",
      describe: "Learn facts about cats",
      string: true
    },
    b: {
      demand: false,
      alias: "breeds",
      describe: "Learn about different breeds of cats"
    }
  })
  .help()
  .alias("help", "h").argv;

async function callCat(main) {
  try {
    await main();
  } catch (e) {
    console.log(`Error! Reference Error: ${e.ReferenceError}`);
  }
}

const check = () => {
  if (argv.facts === "") {
    fact.getFacts();
  } else if (argv.facts) {
    let limitVal = argv.facts;
    limitVal = parseInt(limitVal);
    console.log(limitVal);
    console.log(typeof limitVal);
    if (typeof limitVal != "number") {
      throw new Error("limit value must be an integer!");
    } else if (limitVal === NaN) {
      throw new Error("Input a valid number");
    } else {
      fact.getFacts(limitVal);
    }
  } else if (argv.breeds) {
    breed.getBreed();
  } else {
    console.log("Input a valid command");
    console.log('input "--help" to list of avaliable commands');
  }
};

callCat(check);
