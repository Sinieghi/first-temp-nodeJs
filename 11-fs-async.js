const fs = require("fs");
const { readFile, writeFile } = fs;
/*aqui é o tal do asyn, basicamente ele starta o task dai enquanto vai fazendo esse
task que é essa functon no caso ele ja icicia outro, repare no log desses tastk que o
"starting the next task" trigga antes do "done with this task" que esta dentro da function */
console.log("start task");
readFile("./content/first.txt", "utf-8", (err, results) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = results;
  readFile("./content/second.txt", "utf-8", (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = results;
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting the next task");
