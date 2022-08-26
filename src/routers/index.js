const homeRouter = require('./home');
const productRouter = require('./product');
const productDetailRouter = require('./productDetail');
const loginRouter = require('./login');
const adminRouter = require('./admin');
const listRouter = require('./listDS');
const buyRouter = require('./buyCart');

function route(app){

	app.use('/product', productRouter);

	app.use('/sanpham', productDetailRouter);

	app.use('/login', loginRouter);

	app.use('/admin', adminRouter);	

	app.use('/list', listRouter);

	app.use('/buy', buyRouter);	
	
	app.use('/', homeRouter);

}

module.exports = route;