const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const ArticleSchema = Schema({
  author: ({ type: String, required: false }),
  title: ({ type: String, required: true }),
  tags: ({ type: Array, default: [] }),
  description: ({ type: String, required: false }),
  publishDate: ({ type: Date, required: false }),
  body: ({ type: String, required: true }),
  source: ({ type: mongoose.Schema.Types.ObjectId, ref: 'Source', required: true }),
});

module.exports = mongoose.model('Article', ArticleSchema);
