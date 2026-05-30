const mongoose = require("mongoose");

const connectdb = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("mongodb conected");
    }
    catch(err){
        console.error(err);
        process.exit(1);
    }

}
module.exports = connectdb;