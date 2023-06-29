const fs = require("fs");
const { readFileSync, writeFileSync } = fs;
console.log("start task");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);

/* basicamente cria um file text com as info desse primeiro parametro, 
ja o segundo parametro {flag:'a'} adiciona o primeiro parametro novamente sem
 reescrevelo, tipo o {...} spred no JS */
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);
console.log("done with this task");
console.log("starting the next task");
