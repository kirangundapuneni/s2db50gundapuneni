/**
 * @Author: Your name
 * @Date:   2022-04-13 16:43:32
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-04-21 23:04:21
 */
const mongoose = require("mongoose")
new mongoose.Types.ObjectId()
const zodiacSchema = mongoose.Schema({
zodiac_name: String,
zodiac_meaning: String,
lucky_number: Number
})
module.exports = mongoose.model("Zodiac",
zodiacSchema)