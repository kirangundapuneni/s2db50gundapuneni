/**
 * @Author: Your name
 * @Date:   2022-04-13 18:54:07
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-04-13 18:54:36
 */
// API for our resources
exports.api = function (req, res) {
    res.write('[');
    res.write('{"resource":"zodiacs", ');
    res.write(' "verbs":["GET","PUT", "DELETE"] ');
    res.write('}');
    res.write(']')
    res.send();
};