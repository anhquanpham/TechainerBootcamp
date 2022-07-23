const fs = require('fs');
const buffer = fs.readFileSync(process.argv[2]);
const str = buffer.toString();
const strArray = str.split('\n');
console.log(strArray.length - 1);