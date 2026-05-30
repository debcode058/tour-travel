const express = require("express");
const router = express.Router();
const controler = require("../controllers/travelControllers")

router.post("/",controler.addtour);
router.get("/",controler.viewtour);
router.get("/:id",controler.viewonetour);
router.put("/:id",controler.updatetour);
router.delete("/:id",controler.delettour);
module.exports = router;

