const { log } = require("console");
const { people, ages } = require("./people");

// console.log(people)
console.log(people, ages);

const { platform, homedir } = require("os");

console.log(people, ages);
log(platform(), homedir())
