const fs = require('fs')

console.log('started the first task')
fs.readFile('./npm/npm_commands.txt', 'utf-8', (err, result) => {
    if (err != null) console.log(err);
    console.log('read Task done');
})

console.log('last job done');