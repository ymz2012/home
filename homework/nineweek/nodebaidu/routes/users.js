var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createPool({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : '123456',
  database : 'baidunews'
});


/* 后台路由页面 */


router.get('/getnews', function(req, res, next) {
    connection.query('SELECT * FROM `news` WHERE `status` = 1 order by id desc',function (error, rows) {
        res.json(rows);
    });
});

//确认更新

router.post('/update', function(req, res) {
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

        /*res.json(rows);*/
    });
});

//模态框取值
router.get('/curnews', function(req, res) {
    var newsid = req.query.newsid;
    connection.query('SELECT * FROM `news` WHERE `id` = ?',[newsid],function (error, rows) {
        res.json(rows);
    });
});

//删除新闻的功能

router.post('/delete', function(req, res) {
    var newsid = req.body.newsid;
    connection.query('UPDATE `news` SET `status` = 2 WHERE `id` = ?',[newsid],function (error, result) {
        if(!error){
            res.json('success');
            console.log(result.affectedRows);
        }

        /*res.json(rows);*/
    });
});

//insert
router.post('/insert', function(req, res) {
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
});


module.exports = router;
