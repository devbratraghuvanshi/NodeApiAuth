
var
  express = require('express'),
  indexRouter = express.Router(),
  apiRouter = require('./apiRoutes/apiRouter'),
  indexController = require("./../controller/indexController")(process.env.PORT || 8888);

indexRouter.get('/', indexController.get);
indexRouter.use('/api', apiRouter) //sub router of index router

module.exports = indexRouter;