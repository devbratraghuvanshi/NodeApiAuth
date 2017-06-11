

var indexController = function (port) {
    var get = function (req, res) {
        res.send('Hello! The API is at http://localhost:'+port+'/api');
    };
    return {
        get: get
    }

}

module.exports = indexController;

