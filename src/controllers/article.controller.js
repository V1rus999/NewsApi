const Article = require('../models/article.model');

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
    if (req.user) {
      const article = new Article({
        author: 'Test Author',
        title: 'Test Title',
        tags: ['Current', 'Test'],
        description: 'Test Desc',
        body: 'Test Body',
        source: req.user.source,
      });

      article.save((err) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send('Article Created');
        }
      });
    } else {
      res.send('Not authorised to create articles');
    }
  }

  return { getIndex, create };
}

module.exports = controller;
