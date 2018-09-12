const db = require('../config/db');

exports.getcats = function(req, res) {
 	let sql = "SELECT url, id FROM cats ORDER BY RAND() LIMIT 2";
	db.query(sql, function (err, result) {
	if (err) throw err;
	res.send(JSON.stringify({ cat1: result[0], cat2: result[1] }));
	});
};

exports.get_all_cats = function(req, res) {
 	let sql = "SELECT url, rating FROM cats ORDER BY rating DESC";
	db.query(sql, function (err, result) {
	if (err) throw err;
	res.send(JSON.stringify({ list: result }));
	});
};

exports.vote = function(req, res) {
	id = req.body.id;
	let sql = "UPDATE cats SET rating=rating+1 WHERE id=?";
	db.query(sql, id, function (err, result) {
	if (err) throw err;
	});
	res.send(JSON.stringify({ rating: true }));
};
