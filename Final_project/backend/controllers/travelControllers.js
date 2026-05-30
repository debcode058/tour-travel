const Tours = require("../models/Tour");

// add Tour
exports.addtour = async(req,res)=>{
    try{
        const {title,price} = req.body;
        const newtour = new Tours({title,price});
        await newtour;
        res.json(newtour);
    } 
    catch(err){
        console.error(err);
    }
}
// view Tour
exports.viewtour =async(req,res) => {
    try{
        const viewtours = await Tours.find();
        res.json(viewtours);
    } catch(err){
        console.error(err);
    }
}
// singleview
exports.viewonetour = async (req,res)=>{
    try{
        const newtour = await Tours.findById(req.params.id);
        res.json(newtour);
    } catch(err){
        console.error(err);
    }
}
// update tour
exports.updatetour = async (req,res)=>{
    try{
        const {title,price} = req.body;
        const newtour = await Tours.findByIdAndUpdate(req.params.id,{title,price},{new:true});
        res.json(newtour);
    } catch(err){
        console.error(err);
    }
}
// delete tour
exports.delettour = async (req,res)=>{
    try{
        await Tours.findByIdAndDelete(req.params.id);
        res.json({message:"Tour deleted successfully"});
    } catch(err){
        console.error(err);
    }
}