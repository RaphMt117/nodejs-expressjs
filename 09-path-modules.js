const path = require("path");

console.log(path.sep);

// relative path
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

// base
const base = path.basename(filePath);
console.log(base);

// absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
