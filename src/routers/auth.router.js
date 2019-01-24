const express = require('express');
const controller = require('../controllers/auth.controller')();

const authRouter = express.Router();

function router() {
  authRouter.route('/login').get(controller.login);
  return authRouter;
}

module.exports = router;
