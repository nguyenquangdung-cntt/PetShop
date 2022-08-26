const db = require('../models/index');

class ProductDetailController {
	show(req, res, next){
		const tensp = req.params.slug;
		const query = "SELECT * FROM sanpham WHERE tensp = ?";
		db.query(query, [tensp], function (err, products, fields){
			if(err){
				next(err);
				return;
			}
			res.render("product/productDetail", {products: products, layout: false});
		});
	}
}

module.exports = new ProductDetailController();