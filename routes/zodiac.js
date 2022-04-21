/**
 * @Author: Your name
 * @Date:   2022-04-08 11:25:29
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-04-20 19:39:03
 */
var express = require('express');
var router = express.Router();
const zodiac_controller= require('../controllers/Zodiac');

/* GET Zodiac */
router.get('/', function(req, res, next) {
router.get('/detail', zodiac_controller.zodiac_view_one_Page);
/* GET create car page */
res.render('Zodiac', { title: 'Search Results Zodiac' });
});

module.exports = router;