const mongoose = require('mongoose');

function databaseService() {
  function initializeDatabase() {
    const devDbUrl = "THE URL WILL BE ENTERED HERE"
    const mongoDbUrl = process.env.MONGODB_URI || devDbUrl;

    mongoose.connect(mongoDbUrl, { useNewUrlParser: true });
    mongoose.Promise = global.Promise;

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  }

  return { initializeDatabase };
}

module.exports = databaseService;
