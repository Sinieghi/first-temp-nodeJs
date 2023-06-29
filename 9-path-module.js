const path = require("path");

console.log(path.sep);
// monta o path dentro dessa var, \content\subfolder\test.txt
const filePath = path.join("/content//", "subfolder/", "test.txt");
console.log(filePath);
//demontra o file que o path setou, test.txt
const base = path.basename(filePath);
console.log(base);
//demonstra toda a rota "absolute path", nesse caso E:\DOC\Node-learn\content\subfolder\test.txt
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
