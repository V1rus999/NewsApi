const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const UserSchema = Schema({
  username: ({ type: String, required: true }),
  password: ({ type: String, required: true }),
  email: ({ type: String, required: true }),
  enabled: ({ type: Boolean, default: true }),
  source: ({ type: mongoose.Schema.Types.ObjectId, ref: 'Source', required: true }),
});

module.exports = mongoose.model('User', UserSchema);
