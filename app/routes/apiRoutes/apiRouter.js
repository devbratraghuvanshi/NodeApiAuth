var
  express = require('express'),
  apiRouter = express.Router(),
  passport = require('passport'),
  User = require('./../../models/user'), // get the mongoose model
  port = process.env.PORT || 8888;

apiRouter.get('/',
  require("./../../controller/indexController")(port).get);

// create a new user account (POST http://localhost:8080/api/signup)
apiRouter.post('/signup',
  require("./../../controller/signupController"));

// route to a restricted info (GET http://localhost:8080/api/memberinfo)
apiRouter.get('/memberinfo',
  passport.authenticate('jwt', { session: false }),
  require("./../../controller/memberinfoController"));

// route to authenticate a user (POST http://localhost:8080/api/authenticate) 
apiRouter.post('/authenticate',
  require("./../../controller/authenticateController"));

module.exports = apiRouter;