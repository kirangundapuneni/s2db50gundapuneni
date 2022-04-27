/**
 * @Author: Your name
 * @Date:   2022-04-08 11:25:29
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-04-27 02:19:45
 */
var express = require('express');
const zodiac_controller= require('../controllers/zodiac');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user) {
      return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
  }

/* GET Zodiac */
router.get('/', zodiac_controller.zodiac_view_all );
/* GET detail zodiac page */
router.get('/detail', zodiac_controller.zodiac_view_one_Page);
/* GET create update page */
router.get('/update', secured, zodiac_controller.zodiac_update_Page);
/* GET create zodiac page */
router.get('/create', secured, zodiac_controller.zodiac_create_Page);
/* GET delete zodiac page */
router.get('/delete',secured, zodiac_controller.zodiac_delete_Page);

module.exports = router;