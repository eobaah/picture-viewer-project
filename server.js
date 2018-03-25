const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Is this working!');
  })
  .listen(process.env.PORT || 8080);
