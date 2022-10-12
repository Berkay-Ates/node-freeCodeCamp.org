const http = require('http')
const roots = require('../../modules_and_getting_warm/http_root_names/root_names')

const server = http.createServer((req, res) => {

    if (req.url === roots.homeView) {
        res.end('this is home view');
    } else if (req.url === roots.about) {
        res.end('this is about page');
    } else {
        res.end('this is an default page');
    }

})

server.listen(5000, () => {

    console.log('listening on port 5000');
});