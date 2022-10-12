console.log('first')

setTimeout(() => {
    console.log('timeout job done');
    console.log('interval added to waiting room and then it added to the callstack quee');
}, 1000.0);

console.log('last job done');