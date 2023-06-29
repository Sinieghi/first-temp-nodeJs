//CommonJs, every file is module (by default)
// module - Encapsulated Code (only share minimum)
//4-first-module.js
const names = require("./4-first-module");
//utils.js
const sayHi = require("./5-utils");
//6-alternative-export.js
const alternative = require("./6-alternative-exports");
//7-mind-blow.js
require("./7-mind-blow");

console.log(alternative);

sayHi("ana");
sayHi(names.luiz);
sayHi(names.jhon);
