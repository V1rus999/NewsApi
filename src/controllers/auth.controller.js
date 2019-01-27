const User = require('../models/user.model');
const Source = require('../models/news.source.model');

function controller() {
  function login(req, res) {
    User.findOne({ username: 'admin' }, (err, user) => {
      if (err || user == null) {
        res.send('No user created');
      } else {
        req.login(user, (innerErr) => {
          if (err) {
            res.send(`Error ${innerErr}`);
          } else {
            res.send('Logged in');
          }
        });
      }
    });
  }

  function createNewUser(res) {
    Source.findOne({ name: 'NewsTest' }, (err, source) => {
      if (err || source == null) {
        const newSource = Source({ id: '1', name: 'NewsTest' });
        newSource.save();
        const user = new User({
          username: 'admin',
          password: 'admin',
          email: 'admin@gmail.com',
          source: newSource._id,
        });
        user.save();
      } else {
        const user = new User({
          username: 'admin',
          password: 'admin',
          email: 'admin@gmail.com',
          source: source._id,
        });
        user.save();
      }
    });
    res.send('Done create user');
  }

  function createUser(req, res) {
    User.findOne({ username: 'admin' }, (err, user) => {
      if (err || user == null) {
        createNewUser(res);
      } else {
        res.send('User already exists');
      }
    });
  }

  return { login, createUser };
}

module.exports = controller;
