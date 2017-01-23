var User = require('../model/user');

// signup
exports.getSignup = function (req, res) {
	res.render('signup', {
		title: '注册'
	});
}

// signin
exports.getSignin = function (req, res) {
	res.render('signin',  {
		title: '登录'
	});
}

// user signup
exports.signup = function (req, res) {
	var _user = req.body.user;

	// form input not null
	if(!!(_user.name) && !!(_user.email) && !!(_user.password))
	{
		User.findOne({name: _user.name}, function (err, user) {
			if (err) console.log(err);
			// user had signup
			if(user)
			{
				console.log('该用户已注册');
				res.redirect('/signup');
			}
			else
			{
				// create user account
				var userEntity = new User(_user);
				userEntity.save(function (err, user) {
					if (err) console.log(err);

					res.redirect('/signin');
				});
			}
		});
	}
	else
	{
		res.redirect('/signup');
	}
}
