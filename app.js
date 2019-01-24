const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 3000;

const authRouter = require('./src/routers/auth.router')();
const newsAgencyRouter = require('./src/routers/newsAgencyRouter')();
const articleRouter = require('./src/routers/article.router')();

require('./src/services/database.service')().initializeDatabase();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'changeThis' }));

require('./src/config/passport')(app);

app.use('/auth', authRouter);
app.use('/api/agencies', newsAgencyRouter);
app.use('/api/articles', articleRouter);

app.get('*', (req, res) => {
  res.send('Path is not handled');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
