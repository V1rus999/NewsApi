const mongoose = require('mongoose');

function databaseService() {
  function initializeDatabase() {
    // Test Name = dbUser1, PW = dbUser1No1PasswordInTheWorld!!
    const devDbUrl = 'mongodb://dbUser1:dbUser1No1PasswordInTheWorld!!@ds253284.mlab.com:53284/newstest';
    const mongoDbUrl = process.env.MONGODB_URI || devDbUrl;

    mongoose.connect(mongoDbUrl, { useNewUrlParser: true });
    mongoose.Promise = global.Promise;

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  }

  return { initializeDatabase };
}

module.exports = databaseService;
