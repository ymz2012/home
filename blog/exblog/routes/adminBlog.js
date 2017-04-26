var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createPool({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : '123456',
  database : 'blog'
});

//用户新增文章
router.post('/insert',function (req, res) {
    var newstitle = req.body.newstitle,
	    newstype = req.body.newstype,
        newscontent = req.body.newscontent,
        newstime = req.body.newstime;
		connection.query('INSERT INTO `blog_table` (`newstitle`,`newstype`,`newscontent`,`newstime`) VALUES (?,?,?,?)',[newstitle,newstype,newscontent,newstime],function (error, result) {
			console.log(result);
            if(!error){
                res.json('success');
                console.log(result.insertId);
            }
       });
});
//获取新闻列表
router.get('/getnews', function(req, res, next) {
    connection.query('SELECT * FROM `blog_table` order by item_id desc',function (error, rows) {
    		console.log(rows);
        res.json(rows);
    });
});

module.exports = router;