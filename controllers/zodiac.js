/**
 * @Author: Your name
 * @Date:   2022-04-13 18:42:11
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-04-20 22:51:20
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
// Handle Zodiac delete on DELETE.
exports.zodiac_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Zodiac.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle Zodiac update form on PUT.
exports.zodiac_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Zodiac.findById(req.params.id)
        // Do updates of properties
        if (req.body.zodiac_name)
            toUpdate.zodiac_name = req.body.zodiac_name;
        if (req.body.zodiac_meaning) toUpdate.zodiac_meaning = req.body.zodiac_meaning;
        if (req.body.lucky_number) toUpdate.lucky_number = req.body.lucky_number;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
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

// for a specific Zodiac.
exports.zodiac_info = async function (req, res) {
    console.log("info" + req.params.id);
    try {
        result = await Zodiac.findById(req.params.id);
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle a show one view with id specified by query
exports.zodiac_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Zodiac.findById(req.query.id)
        res.render('zodiacdetail',
            { title: 'Zodiac Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a zodiac.
// No body, no in path parameter, no query.
// Does not need to be async
exports.zodiac_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('zodiaccreate', { title: 'Zodiac Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a car.
// query provides the id
exports.zodiac_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Zodiac.findById(req.query.id)
        res.render('zodiacupdate', { title: 'Zodiac Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.zodiac_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Zodiac.findById(req.query.id)
        res.render('zodiacdelete', {title: 'Zodiac Delete', toShow: result});
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

