/**
 * @Author: Your name
 * @Date:   2022-04-06 15:48:25
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-04-06 15:49:01
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('zodiac', { title: 'Search Results by zodiac signs' });
});

module.exports = router;