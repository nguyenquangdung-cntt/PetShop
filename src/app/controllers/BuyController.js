const db = require('../models/index');

class BuyController {
	index(req, res, next){
		res.render('buyCart', {layout: false});
	}
}

module.exports = new BuyController;