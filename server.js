const express = require('express');
const path = require('path');
const logger = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const session = require('express-session');

const authService  = require('./user/auth/AuthService.js');
const authRouter  = require('./user/auth/AuthRouter.js');
const router = require('./routes/dbRoutes.js');
const PORT = process.env.PORT || 3000;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', router);

app.listen(PORT, () => {
    console.log(`app is listening on port: ${PORT}`);
})
