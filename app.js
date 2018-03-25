const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello Eugene!'));

app.listen(process.env.PORT || 8080);
