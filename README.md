# Catty Kitty 

For the love of furry Felidae, Catty Kitty is a simple CLI node app for learning about cats 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Git, Node and npm

### Installing

Clone the repo from and navigate to the project folder on local machine and install all dependencies using npm

```
git clone https://github.com/paularah/Catty-Kitty
```

This clones the repository into the specified location locally

```
npm install
```

This install all node dependencies like yarn, axios, etc needed to run this projects.

## Facts

Facts returns a random fact about cats.

```
node app.js --facts
```

### Facts with arguments

Using the fact flag with an argument returns something. The facts flag takes in a interger of how many facts about cats do you want. N/B: Passing in an argument of string or any other data type coverted to its numeric value. Any format for passing CLI arguments with yarn is acceptable. 

```
node app.js --facts=4
```
## Breeds
The breed flag returns a list of cat breeds. The breed flag doesn't take in  any arguments. 

```
node app.js --breeds
```
