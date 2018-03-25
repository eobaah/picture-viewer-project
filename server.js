// const http = require('http');
//
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('Is this working!');
//   })
//   .listen(process.env.PORT || 8080);

const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'html');
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(process.env.PORT || 8080, () => console.log('app is running on port 8080'));
