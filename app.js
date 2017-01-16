var express = require('express'),
    path = require('path'),
    exphbs  = require('express-handlebars'),
    PORT = process.env.PORT || 3000,
    app =  express();

// 设置静态文件访问路径
// __dirname: 指当前目录
app.use(express.static(path.join(__dirname,'public')));

// 设置view template
app.engine('hbs', exphbs({
  layoutsDir: 'views',
  defaultLayout: 'default',
  partialsDir: [
    'views/partials/'
  ],
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

require('./router/config')(app);
// server process listen
app.listen(PORT, function () {
	console.log("server running on 3000 port.");
});