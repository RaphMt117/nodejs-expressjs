//  modules

// CommonJS-  every file is a module by default
// modules-   encapsulated code (share only what you want)
const names = require("./04-names");
const sayHi = require("./05-utils");
const bobName = require("./06-alternative-import")



require ('./07-function-import.js')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
