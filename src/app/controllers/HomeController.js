const db = require('../models/index');

class HomeController {
	index(req, res, next){
		db.query("SELECT * FROM sanpham", function (err, products, fields){
			if(err){
				next(err);
				return;
			}
			res.render("home", {products: products});
		});
	}
}

module.exports = new HomeController;