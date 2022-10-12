const fs = require('fs')

console.log('start');

fs.readFile('./modules/test/test.txt', 'utf-8', (err, result) => {

    if (err != null) {
        console.log(err);
        return;
    };
    const firstFile = result
    fs.readFile('./modules/test/test2.txt', 'utf-8', (err, result) => {
        if (err != null) {
            console.log(err);
            return;
        };
        const secondFile = result;
        fs.writeFile('./modules/test/async_Created.txt', `asyncly read data is ${firstFile}, ${secondFile}`, (err) => {
            console.log('writing operations completed');
        });

    });
});

console.log('all write and read operations done');