const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
  try {
    const cart = new Cart({
      userId: req.user.id,
      tourId: req.body.tourId,
    });

    await cart.save();

    res.status(201).json({
      success: true,
      message: "Added To Cart",
      cart,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.find({
      userId: req.user.id,
    }).populate("tourId");

    res.json(cart);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.removeCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Removed From Cart",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};