const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const SourceSchema = Schema({
  id: ({ type: String, required: false }),
  name: ({ type: String, required: false }),
});

module.exports = mongoose.model('Source', SourceSchema);
