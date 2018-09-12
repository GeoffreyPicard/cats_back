module.exports = function(app) {

    var cats = require('../controllers/controllers.js');

	app.get('/', function (req, res) {
	  res.send('Hello World!')
	})

	app.get('/getimages', cats.getcats);
}
