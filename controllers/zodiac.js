/**
 * @Author: Your name
 * @Date:   2022-04-13 18:42:11
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-04-13 21:20:40
 */
var Zodiac = require('../models/zodiac');
// List of all zodiac signs
exports.zodiac_list = async function (req, res) {
    try {
        theZodiacSigns = await Zodiac.find();
        res.send(theZodiacSigns);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Zodiac sign.
exports.zodiac_info = function (req, res) {
    res.send('NOT IMPLEMENTED: Car detail: ' + req.params.id);
};
// Handle Zodiac create on POST.
exports.zodiac_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Zodiac();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.zodiac_name = req.body.zodiac_name;
    document.zodiac_meaning = req.body.zodiac_meaning;
    document.lucky_number = req.body.lucky_number;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Zodiac delete form on DELETE.
exports.zodiac_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Zodiac delete DELETE ' + req.params.id);
};
// Handle Zodiac update form on PUT.
exports.zodiac_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Zodiac update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.zodiac_view_all = async function (req, res) {
    try {
        theZodiacs = await Zodiac.find();
        res.render('zodiacs', { title: 'Zodiac Search Results', results: theZodiacs });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};