const finalhandler = require('finalhandler');
const http = require('http');
const serveStatic = require('serve-static');
const PORT = process.env.PORT || 3000;

const serve = serveStatic('dist', { index: ['index.html'] });

var server = http.createServer((req, res) => {
  serve(req, res, finalhandler(req, res));
});

server.listen(PORT);
console.log(`listening on ${PORT}`);
