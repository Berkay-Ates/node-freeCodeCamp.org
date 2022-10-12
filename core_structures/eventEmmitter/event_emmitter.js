const EventEmmitter = require('events')

const customEmmitter = new EventEmmitter()

customEmmitter.on('response', () => {
    console.log('this is custom emmitter response');
})

customEmmitter.emit('response')