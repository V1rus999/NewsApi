const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 3000;

const newsAgencyRouter = require('./src/routers/newsAgencyRouter')();
const articleRouter = require('./src/routers/article.router')();

// Test Name = dbUser1, PW = dbUser1No1PasswordInTheWorld!!
const devDbUrl = 'mongodb://dbUser1:dbUser1No1PasswordInTheWorld!!@ds253284.mlab.com:53284/newstest';
const mongoDbUrl = process.env.MONGODB_URI || devDbUrl;

mongoose.connect(mongoDbUrl, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'changeThis' }));


app.use('/api/agencies', newsAgencyRouter);
app.use('/api/articles', articleRouter);

app.get('*', (req, res) => {
  res.send('Path is not handled');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
