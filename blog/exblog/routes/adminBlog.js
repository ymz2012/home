var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createPool({
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: '123456',
	database: 'blog'
});

//用户新增文章
router.post('/insert', function(req, res) {
	var newstitle = req.body.newstitle,
		newstype = req.body.newstype,
		newscontent = req.body.newscontent,
		newstime = req.body.newstime;
	connection.query('INSERT INTO `blog_table` (`newstitle`,`newstype`,`newscontent`,`newstime`) VALUES (?,?,?,?)', [newstitle, newstype, newscontent, newstime], function(error, result) {
		console.log(result);
		if(!error) {
			res.json('success');
			console.log(result.insertId);
		}
	});
});
//获取新闻列表
router.get('/getnews', function(req, res, next) {
	connection.query('SELECT * FROM `blog_table` WHERE `status` = 1 order by item_id desc', function(error, rows) {
		console.log(rows);
		res.json(rows);
	});
});

//模态框取值
router.get('/curnews', function(req, res) {
	var item_id = req.query.item_id;
	connection.query('SELECT * FROM `blog_table` WHERE `item_id` = ?', [item_id], function(error, rows) {
		console.log(rows);
		res.json(rows);
	});
});

//删除博文的功能
router.post('/delete', function(req, res) {
	var item_id = req.body.item_id;
	connection.query('UPDATE `blog_table` SET `status` = 2 WHERE `item_id` = ?', [item_id], function(error, result) {
		if(!error) {
			res.json('success');
			console.log(result.affectedRows);
		}
		/*res.json(rows);*/
	});

});

module.exports = router;