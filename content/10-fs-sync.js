const fs = require("fs");
const { readFileSync, writeFileSync } = fs;

const first = readFileSync("first.txt", "utf8");
const second = readFileSync("second.txt", "utf8");

// console.log(first, second);

/* basicamente cria um file text com as info desse primeiro parametro, 
ja o segundo parametro {flag:'a'} adiciona o primeiro parametro novamente sem
 reescrevelo, tipo o {...} spred no JS */
writeFileSync("result-sync.txt", `Here is the result : ${first}, ${second}`, {
  flag: "a",
});
