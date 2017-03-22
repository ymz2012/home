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

//token验证
router.get('/token', function(req, res, next) {
    var token = md5()
    res.json(token);
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
        console.log();
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
/*    var newstype = htmlDecode(req.body.newstype),
        newstitle = htmlDecode(req.body.newstitle),
        newsimg = htmlDecode(req.body.newsimg),
        newstime = htmlDecode(req.body.newstime),
        newssrc = htmlDecode(req.body.newssrc);*/
    var newstype = req.body.newstype,
        newstitle = req.body.newstitle,
        newsimg = req.body.newsimg,
        newstime = req.body.newstime,
        newssrc = req.body.newssrc;

/*    //将传过来的字段进行解码传进数据库(之前想不解码直接穿进去,发现不好使好像是因为有&这个符号)
    function htmlDecode(str){
        var s = "";
        if(str.length == 0) return "";
        s = str.replace(/&amp;/g,"&");
        s = s.replace(/&lt;/g,"<");
        s = s.replace(/&gt;/g,">");
        s = s.replace(/&nbsp;/g," ");
        s = s.replace(/&#39;/g,"\'");
        s = s.replace(/&quot;/g,"\"");
        return String(s);
    }
    console.log(newstitle);
    console.log(newstype);*/
    connection.query('INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES (?,?,?,?,?)',[newstitle,newstype,newsimg,newstime,newssrc],function (error, result) {
        if(!error){
            res.json('success');
            console.log(result.insertId);
        }

    });
});





module.exports = router;


