const Article = require('../models/article.model');
const Source = require('../models/news.source.model');

function controller() {
  function getIndex(req, res) {
    Article.find({}, '-_id -__v')
      // https://mongoosejs.com/docs/populate.html
      .populate('source', '-_id -__v')
      .exec((error, value) => {
        if (error) {
          res.status(500).send(error);
        } else if (value.length > 0) {
          res.json(value);
        } else {
          res.status(404).send('No Articles Found');
        }
      });
  }

  function create(req, res) {
    const source = Source({ id: '1', name: 'NewsTest' });
    source.save();

    const article = new Article({
      author: 'Test Author',
      title: 'Test Title',
      tags: ['Current', 'Test'],
      description: 'Test Desc',
      body: 'Test Body',
      source: source._id,
    });

    article.save((err) => {
      if (err) {
        res.status(500).send(err);
      }
      res.send('Article Created');
    });
  }

  return { getIndex, create };
}

module.exports = controller;
