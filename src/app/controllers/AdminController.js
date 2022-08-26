const db = require('../models/index');

class AdminController {
	index(req, res, next){
		res.render('admin', {layout: false});
	}
	show(req, res, next){

		var tensp = req.body.tensp;
		var giasp = req.body.giasp;
		var mota = req.body.mota;
		var hinh = req.body.hinh;
		var id_loai = req.body.id_loai;

		const data = [tensp, giasp, mota, hinh, id_loai];
		db.query("INSERT INTO sanpham (tensp, giasp, mota, hinh, id_loai) VALUES (?)", [data], function (err, products){
			if(err){
				next(err);
				return;
			}
			res.redirect('/list');
		});
	}
}


module.exports = new AdminController;
