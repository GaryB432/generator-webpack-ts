const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const oneDay = 86400000;

function nocache() {
  return function nocache(req, res, next) {
    console.log(req.url, req.method);
    if (
      req.url === '/service-worker.js' ||
      req.url.startsWith('/precache-manifest')
    ) {
      res.setHeader('Surrogate-Control', 'no-store');
      res.setHeader(
        'Cache-Control',
        'no-store, no-cache, must-revalidate, proxy-revalidate'
      );
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
    next();
  };
}

app.use(nocache());

app.use(
  express.static(__dirname + '/dist', {
    index: ['index.html'],
    // maxAge: oneDay,
  })
);

app.listen(PORT);
console.log(`listening on ${PORT}`);
