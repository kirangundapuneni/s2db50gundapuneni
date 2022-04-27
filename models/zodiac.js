/**
 * @Author: Your name
 * @Date:   2022-04-13 16:43:32
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-04-27 01:54:35
 */
const mongoose = require("mongoose")
new mongoose.Types.ObjectId()
const zodiacSchema = mongoose.Schema({
    zodiac_name: { 
        type: String,
        minLength: 3,
        maxLength: 20, 
        required: true,
        trim: true
    },
    zodiac_meaning: { 
        type: String, 
        required: true
    },
    lucky_number: { 
        type: Number, 
        min:[0, 'Must be at least 0, got {VALUE}'], 
        max:9999
    }
})
module.exports = mongoose.model("Zodiac",
zodiacSchema)