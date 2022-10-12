const path = require('path')

console.log(path.sep);
console.log(path.join('/modules', 'test', 'test.txt'))

const absoulutePath = path.resolve(__dirname, 'modules', 'test', 'test.txt')
const absolute = path.absoulutePath
console.log(absolute);
console.log(absoulutePath);

