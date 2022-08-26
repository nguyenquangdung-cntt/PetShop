const db = require('../models/index');

class listDSController {
	index(req, res, next){
		db.query("SELECT * FROM sanpham", function (err, result, fields){
			if(err){
				next(err);
				return;
			}
			res.render("listDS", {result: result, layout: false});
		});
	}
	edit(req, res, next){
		const masp = req.params.id;
		const query = "SELECT * FROM sanpham WHERE masp = ?";
		db.query(query, [masp], function (err, products, fields){
			if(err){
				next(err);
				return;
			}
			res.render("update", {products: products, layout: false});
		});
	}
	update(req, res, next){

		var tensp = req.body.tensp;
		var giasp = req.body.giasp;
		var mota = req.body.mota;
		var hinh = req.body.hinh;
		var id_loai = req.body.id_loai;
		var masp = req.params.id;

		db.query("UPDATE sanpham SET tensp = ?, giasp = ?, mota = ?, hinh = ?, id_loai = ? WHERE masp = ?", [tensp, giasp, mota, hinh, id_loai, masp], function (err, products){
			if(err){
				next(err);
				return;
			}
			res.redirect('/list');
		});
	}
	delete(req, res, next){
		const masp = req.params.id;
		db.query("DELETE FROM sanpham WHERE masp = ?", [masp], function (err, products){
			if(err){
				next(err);
				return;
			}
			res.redirect('/list');
		});
	}
}

module.exports = new listDSController;