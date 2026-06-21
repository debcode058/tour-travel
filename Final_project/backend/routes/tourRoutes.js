const express = require("express");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const router = express.Router();
const controler = require("../controllers/travelControllers")


//Image upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
const upload = multer({ storage: storage });

//Auth check
const authCheck = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.json({ message: "No token provided" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (err) {
        res.json({ message: "Invalid token" });
    }
}

// Admin check
const adminCheck = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.json({ 
            message: "Only admins can access",
         });
    }
    next();
}
//admin access/AddTour
router.post("/",authCheck, adminCheck, upload.single("image"), controler.addtour);

//update tour
router.put("/:id",authCheck, adminCheck, upload.single("image"), controler.updatetour);

//delete tour
router.delete("/:id",authCheck, adminCheck, controler.delettour);

//public access
//view all tour
router.get("/",controler.viewtour);

//view single tour
router.get("/:id",controler.viewonetour);


module.exports = router;

