const express = require('express');
const articleController = require('../controllers/article.controller')();

const articleRouter = express.Router();

function router() {
  articleRouter.route('/')
    .get(articleController.getIndex);

  articleRouter.post('/create', articleController.create);
  return articleRouter;
}

module.exports = router;
