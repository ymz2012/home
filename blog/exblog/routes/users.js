var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var crypto = require('crypto');
var md5 = crypto.createHash('md5');
var session = require('session');
//定义token验证
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var csrf = require('csurf')
// setup route middlewares
var csrfProtection = csrf({ cookie: true })
var parseForm = bodyParser.urlencoded({ extended: false })
// parse cookies
// we need this because "cookie" is true in csrfProtection
router.use(cookieParser())


var connection = mysql.createPool({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : '123456',
  database : 'blog'
});


router.get('/getToken', csrfProtection, function (req, res) {
    // pass the csrfToken to the view
    //将token传出去让验证的时候可以调用
    global.token = {"token":req.csrfToken()};
    res.json(token);
    //res.render('send', { csrfToken: req.csrfToken() })
})

router.post('/doRegister',function (req, res) {
    var userId = req.body.userId,
	    passwd = req.body.passwd,
        repeat = req.body.repeat,
        nick = req.body.nick,
        email = req.body.email,
        fr = req.body.fr;
		connection.query('INSERT INTO `user` (`name`,`nickname`,`email`,`password`) VALUES (?,?,?,?)',[userId,nick,email,passwd],function (error, result) {
			console.log(result);
            if(!error){
                res.json('success');
                console.log(result.insertId);
            }
        });
})

/* 后台路由页面 */

router.get('/getnews', function(req, res, next) {
    connection.query('SELECT * FROM `news` WHERE `status` = 1 order by id desc',function (error, rows) {
        res.json(rows);
    });
});

//确认更新

router.post('/update', function(req, res) {
    var tokenKey = token["token"];
    console.log(req.body.token);
    console.log("====");
    console.log(tokenKey);
    //判断token值是否一致
    if(req.body.token == tokenKey){
        var newsid = req.body.id,
            newstype = req.body.newstype,
            newstitle = req.body.newstitle,
            newsimg = req.body.newsimg,
            newstime = req.body.newstime,
            newssrc = req.body.newssrc;
        connection.query('UPDATE `news` SET `newstitle`=?,`newstype`=?,`newsimg`=?,`newstime`=?,`newssrc`=? WHERE `id` = ?',[newstitle,newstype,newsimg,newstime,newssrc,newsid],function (error, rows) {
            if(!error){
                res.json('success');
                console.log(rows.changedRows);
            }
        });
    }

});
//模态框取值
router.get('/curnews', function(req, res) {
    var newsid = req.query.newsid;
    connection.query('SELECT * FROM `news` WHERE `id` = ?',[newsid],function (error, rows) {
        console.log();
        res.json(rows);
    });
});

//删除新闻的功能

router.post('/delete', function(req, res) {
    var tokenKey = token["token"];
    if(req.body.token == tokenKey){
        var newsid = req.body.newsid;
        connection.query('UPDATE `news` SET `status` = 2 WHERE `id` = ?',[newsid],function (error, result) {
            if(!error){
                res.json('success');
                console.log(result.affectedRows);
            }

            /*res.json(rows);*/
        });
    }
});

//insert
router.post('/insert', function(req, res) {
    var tokenKey = token["token"];
    if(req.body.token == tokenKey){
        var newstype = req.body.newstype,
            newstitle = req.body.newstitle,
            newsimg = req.body.newsimg,
            newstime = req.body.newstime,
            newssrc = req.body.newssrc;
        connection.query('INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES (?,?,?,?,?)',[newstitle,newstype,newsimg,newstime,newssrc],function (error, result) {
            if(!error){
                res.json('success');
                console.log(result.insertId);
            }
        });
    }
});

module.exports = router;
