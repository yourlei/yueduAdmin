module.exports = function (app) {
	// require("./router/config")(app);
	app.get('/', function (req, res) {
	    res.render('index', {
	    	title: '悦读'
	    });
	});

	app.get('/signin', function (req, res) {
	    res.render('signin', {
	    	title: '悦读-sign in'
	    });
	});
	app.get('/signup', function (req, res) {
	    res.render('signup', {
	    	title: '悦读-sign up'
	    });
	});
	app.get('/admin', function (req, res) {
	    res.render('admin', {
	    	title: '悦读后台管理'
	    });
	});
}