var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = express.Router();
var index = require('./routes/index');
var users = require('./routes/users');
var adminBlog = require('./routes/adminBlog');
var app = express();
var mysql = require('mysql');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//设置引擎，将.jade的文件用./common/jade处理
app.engine('.jade', require('./common/jade'));
app.set('view engine', 'jade');
//数据库连接
global.connection = mysql.createConnection({
    host     : 'localhost',
    port     : '3306',
    user     : 'root',
    password : '123456',
    database : 'blog'
});

//配置和缓存
global.config = require('./common/config');
global.cache = {};

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/news', index);
app.use('/admin', users);
app.use('/adminBlog', adminBlog);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
