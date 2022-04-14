/**
 * @Author: Your name
 * @Date:   2022-04-13 16:43:32
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-04-13 18:19:38
 */
const mongoose = require("mongoose")
const zodiacSchema = mongoose.Schema({
zodiac_name: String,
zodiac_meaning: String,
lucky_number: Number
})
module.exports = mongoose.model("Zodiac",
zodiacSchema)