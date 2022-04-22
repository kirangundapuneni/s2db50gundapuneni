/**
 * @Author: Your name
 * @Date:   2022-04-21 23:32:41
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-04-21 23:33:27
 */
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const passportLocalMongoose = require("passport-local-mongoose"); 
 
const accountSchema = new Schema({ 
    username: String, 
    password: String 
}); 
 
accountSchema.plugin(passportLocalMongoose); 
 
// We export the Schema to avoid attaching the model to the 
// default mongoose connection. 
module.exports = mongoose.model("Account", accountSchema); 
 