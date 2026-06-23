const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const jwt = require("jsonwebtoken");

const authCheck = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "No token provided",
    });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};



router.post("/", authCheck, cartController.addToCart);

router.get("/", authCheck, cartController.getCart);

router.delete("/:id", authCheck, cartController.removeCart);

module.exports = router;