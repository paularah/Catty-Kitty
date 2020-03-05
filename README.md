# Catty-Kitty
For the love of cats, a simple node CLI app for learning about cats
## How to Use:
1. Clone the repo
2. nmp install 
  This install all dependencies needed to run the app
3. node app.js --facts
By default returns a random fact about cats.
4. node app.js --facts=3
Using a any of the specification for passing arguments with yargs, the --fact flags accepts an interger as an arguments. This
returns facts the number of times specified in the argument. I.e --facts=3 retruns 3 random facts about cats. 
5. node app.js --breeds
Returns a list of breeds of different cats. 

