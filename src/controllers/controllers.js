const db = require('../config/db');

exports.getcats = function(req, res) {
 	let sql = "SELECT url, id FROM cats ORDER BY RAND() LIMIT 2";
	db.query(sql, function (err, result) {
	if (err) throw err;
	res.send(JSON.stringify({ cat1: result[0], cat2: result[1] }));
	});
};
