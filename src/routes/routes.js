module.exports = function(app) {

    var cats = require('../controllers/controllers.js');

	// Get two random images of cats
	app.get('/getimages', cats.getcats);

	// Vote for a cat
	app.post('/vote', cats.vote);
}
