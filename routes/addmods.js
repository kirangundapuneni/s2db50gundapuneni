/**
 * @Author: Your name
 * @Date:   2022-04-06 16:30:35
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-04-06 16:30:42
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let query = req.query;
    console.log(`rows ${query.rows}`);
    console.log(`cols ${query.cols}`);
  res.render('addmods', { title: 'Add Mods', query: query });
});

module.exports = router;