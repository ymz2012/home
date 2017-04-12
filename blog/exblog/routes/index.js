var express = require('express');
var router = express.Router();
var mysql = require('mysql');
/* 在主页获取新闻时的请求 */
router.get('/', function(req, res, next) {
    var newstype = req.query.newstype;
    connection.connect();
    connection.query('SELECT * FROM `news` WHERE `status` = 1 AND `newstype` = ?',[newstype], function (error, rows, fields) {
        res.json(rows);
    });
    connection.end();
});
module.exports = router;