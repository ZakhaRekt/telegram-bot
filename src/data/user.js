const mongoose = require('mongoose');
const schema = mongoose.Schema({
    ID: String,
    username: String,
    firstName: String,
    lastName: String,
    language: String,
    messages: {type: Number, default: 0},
    joinTime: {type: Number, default: 0 },
    lastMessageTime: {type: Number, default: 0},
    languageSelected: {type:Boolean, default: false},
});
module.exports = mongoose.model("User", schema)
