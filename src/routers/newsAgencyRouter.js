const express = require('express');
const newsAgencyController = require('../controllers/newsAgencyController')();

const newsAgencyRouter = express.Router();

function router() {
  newsAgencyRouter.route('/')
    .get(newsAgencyController.getIndex);

  return newsAgencyRouter;
}

module.exports = router;
