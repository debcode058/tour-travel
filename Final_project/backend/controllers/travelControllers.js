const Tours = require("../models/Tour");

// add Tour
exports.addtour = async(req,res)=>{
    try{
        const {title,price} = req.body;
        const image = req.file ? req.file.filename : "";
        const newtour = new Tours({title,price,image,});
        await newtour.save();
        res.status(201).json(newtour);
    } 
    catch(err){
        console.error(err);
        res.status(500).json({message:err.message});
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
        let updateData = {
            title,
            price,
        };
        if(req.file){
            updateData.image = req.file.filename;
        }

        const newtour = await Tours.findByIdAndUpdate(req.params.id,
            updateData,
            {
                new:true
            });
        res.status(200).json({
            success:true,
            data:newtour,
            message:"Tour Updated Successfully"
        });
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