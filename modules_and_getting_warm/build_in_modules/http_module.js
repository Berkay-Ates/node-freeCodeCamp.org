const http = require('http')
const rootNames = require('../http_root_names/root_names');


const server = http.createServer((req, res) => {
    if (req.url === rootNames.homeView) {
        res.end('home view congratulations')
    } else if (req.url === rootNames.about) {
        res.end('about page')
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)

    }
    res.end();
});

server.listen(5000);

