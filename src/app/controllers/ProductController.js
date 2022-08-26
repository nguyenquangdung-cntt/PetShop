const db = require('../models/index');

class ProductController {
	index1(req, res, next){
		db.query("SELECT * FROM sanpham WHERE id_loai = 1", function (err, products, fields){
			if(err){
				next(err);
				return;
			}
			res.render("product", {products: products, layout: false});
		});
	}
	index2(req, res, next){
		db.query("SELECT * FROM sanpham WHERE id_loai = 2", function (err, products, fields){
			if(err){
				next(err);
				return;
			}
			res.render("product", {products: products, layout: false});
		});
	}
}

module.exports = new ProductController();