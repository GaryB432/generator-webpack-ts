import finalhandler from 'finalhandler';
import { createServer } from 'http';
import serveStatic from 'serve-static';
const PORT = process.env.PORT || 3000;

const serve = serveStatic('dist', { index: ['index.html'] });

const server = createServer((req, res) => {
  serve(req, res, finalhandler(req, res));
});

server.listen(PORT);
console.log(`listening on ${PORT}`);
