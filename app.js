var express      = require('express'),
    path         = require('path'),
    mongoose     = require('mongoose'),
    exphbs       = require('express-handlebars'),
    bodyParser   = require('body-parser'),
    cookieParser = require('cookie-parser'),
    mongoose     = require('mongoose'),
    session      = require('express-session'),
    mongoStore   = require('connect-mongo')(session),
    PORT         = process.env.PORT || 3000,
    app          = express(),
    db           = mongoose.connection;

mongoose.connect('mongodb://127.0.0.1:27017/yuedu');
db.once('open', function () {
  console.log('mongodb succefully connect.');
});

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

// 通过body-parser中间件解析url，json数据
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
  secret: 'yueduaopenandfreereadingwritingplatform',
  store: new mongoStore({
    url : 'mongodb://127.0.0.1:27017/yuedu',
    collection: 'sessions'
  }),
    resave:false,
    saveUninitialized:true
  })
);
require('./router/router')(app);

// server process listen
app.listen(PORT, function () {
	console.log("server running on 3000 port.");
});