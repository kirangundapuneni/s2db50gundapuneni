/**
 * @Author: Your name
 * @Date:   2022-04-13 18:56:34
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-04-13 20:39:09
 */
var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var zodiac_controller = require('../controllers/zodiac');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);


/// car ROUTES ///
// POST request for creating a car.
router.post('/zodiacs', zodiac_controller.zodiac_create_post);
// DELETE request to delete car.
router.delete('/zodiacs/:id', zodiac_controller.zodiac_delete);
// PUT request to update car.
router.put('/zodiacs/:id', zodiac_controller.zodiac_update_put);
// GET request for one car.
router.get('/zodiacs/:id', zodiac_controller.zodiac_info);
// GET request for list of all car items.
router.get('/zodiacs', zodiac_controller.zodiac_list);
module.exports = router;