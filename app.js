const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'html');
app.use(express.static(`${__dirname}/public`));
app.set('views', path.resolve(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(process.env.PORT || 8080, () => console.log('app is running on port 8080'));
