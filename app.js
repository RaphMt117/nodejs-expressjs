// local dependencies - install packages in local dependencies
// npm i <packageName>

// global dependencies
// npm i -g <packageName>
// sudo npm install <packageName> (if needed)

// dev dependencies
// npm i <packageName> -D
// npm i <packageName> --save-dev

// package.json - manifest file (stores important info about the project/package)
// npm init - create step by step
// npm init -y - create as default

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
console.log('Hello!!!');
