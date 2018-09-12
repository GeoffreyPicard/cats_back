module.exports = function(app) {

    var cats = require('../controllers/controllers.js');

	// Get two random images of cats
	app.get('/getimages', cats.getcats);

	// Get two random images of cats
	app.get('/get_all_images', cats.get_all_cats);

	// Vote for a cat
	app.post('/vote', cats.vote);
}
