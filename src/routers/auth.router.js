const express = require('express');
const controller = require('../controllers/auth.controller')();

const authRouter = express.Router();

function router() {
  authRouter.route('/login').get(controller.login);

  authRouter.route('/createuser').get(controller.createUser);

  return authRouter;
}

module.exports = router;
