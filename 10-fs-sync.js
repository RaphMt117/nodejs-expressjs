const { readFileSync, writeFileSync } = require("fs");

console.log('start');

// first parameter: relative path to the file being readed
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first);
console.log(second);

// first parameter: relative path to the file being created
// second parameter: content of the file
writeFileSync(
    "./content/new.txt",
    "this is a file created using writeFileSync"
);

console.log('Done with this task');
console.log('Starting the next on q qe');

