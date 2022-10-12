//* os package is an build in module 
const os = require('os');

const currentUser = os.currentUser;
const currentUsr = os.userInfo();

// console.log(currentUser);
console.log(`${os.uptime}`);
console.log(currentUsr);

const userInformations = {
    name: os.type,
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),

}

console.log(userInformations);


