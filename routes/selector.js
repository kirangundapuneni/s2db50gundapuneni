/**
 * @Author: Your name
 * @Date:   2022-04-06 17:17:22
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-04-06 18:23:54
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('selector', { title: 'Selector' });
});

module.exports = router;