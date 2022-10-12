const http = require('http')

const server = http.createServer((req, res) => {
    console.log('event loop keep calling create server func')
    res.end('server ended');
})

server.listen(5000, () => {
    console.log('server listening on port 5000');
})
