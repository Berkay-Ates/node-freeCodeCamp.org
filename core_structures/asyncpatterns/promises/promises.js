const { rejects } = require('assert')
const { readFile, writeFile } = require('fs').promises
const utils = require('util')

// const readPromise = utils.promisify(readFile);
// const writefilePromise = utils.promisify(writeFile);


const start = async () => {

    try {
        const first = await readFile('created_for_reading.txt');
        const second = await readFile('./created_for_reading.txt');
        await writeFile('./createdFile', 'This_is_awesome');

    } catch (error) {
        console.log(error);
    }
}

start();


// const readFilePromise = (path) => {
//     return new Promise((resolve, rejects) => {
//         fs.readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 return rejects(err)
//             } else {
//                 return resolve(data)
//             }
//         })
//     })
// }



// readFilePromise('./created_for_reading.txt')
//     .then((result) => { console.log(result); })
//     .catch((err) => { console.log(err); });


