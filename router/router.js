var userRouter = require('../app/controller/user'),
    admin      = require('../app/controller/admin');

module.exports = function (app) {
	// user router
	app.get('/signup', userRouter.getSignup);
	app.get('/signin', userRouter.getSignin);

	// admin
	app.get('/admin', admin.getAdmin);

	// form submit
	app.post('/signup', userRouter.signup);
};

