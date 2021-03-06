require('dotenv').config()

const express = require('express');
const path = require('path');
const logger = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const session = require('express-session');
const router = require('./routes/dbRoutes.js');
const PORT = process.env.PORT || 3000;
const app = express();

app.set('superSecret', process.env.SERVER_SECRET);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(session({
  secret: app.get('superSecret'),
  resave: false,
  saveUninitialized: false,
}));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', router);

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  console.error(err);
  res.status(400).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT}`);
})
