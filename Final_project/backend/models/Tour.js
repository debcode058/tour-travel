const mongoose = require("mongoose");

const locschema = new mongoose.Schema({
    title:String,
    price:Number,
    image:String,
    video:String,
});

module.exports = mongoose.model('Tour',locschema);