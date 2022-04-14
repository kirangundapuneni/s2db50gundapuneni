/**
 * @Author: Your name
 * @Date:   2022-04-13 18:56:34
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-04-13 22:47:49
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
// POST request for creating a zodiac.
router.post('/zodiacs', zodiac_controller.zodiac_create_post);
// DELETE request to delete zodiac.
router.delete('/zodiacs/:id', zodiac_controller.zodiac_delete);
// PUT request to update zodiac.
router.put('/zodiacs/:id', zodiac_controller.zodiac_update_put);
// GET request for one zodiac.
router.get('/zodiacs/:id', zodiac_controller.zodiac_info);
// GET request for list of all zodiac signs.
router.get('/zodiacs', zodiac_controller.zodiac_list);
module.exports = router;