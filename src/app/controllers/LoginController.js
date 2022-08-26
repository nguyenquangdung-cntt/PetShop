class LoginController {
	index(req, res, next){
		res.render('login', {layout: false}); //Không sử dụng layouts chính
	}
}

module.exports = new LoginController;