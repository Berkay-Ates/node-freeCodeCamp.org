const fs = require('fs')
console.log('start');
const testFile = fs.readFileSync('./modules/test/test.txt', 'utf8');
const testFile2 = fs.readFileSync('./modules/test/test2.txt', 'utf8')

const createdFile = fs.writeFileSync('./modules/test/test3.txt', `here is the result: ${testFile}, ${testFile2}`)

console.log('writing operations done');
console.log('all read and write operations done');


