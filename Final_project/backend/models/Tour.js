const mongoose = require("mongoose");

const locschema = new mongoose.Schema({
    title:String,
    price:Number,
});
module.exports = mongoose.model('location',locschema);