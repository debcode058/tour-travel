const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register a new user
exports.register = async (req, res) => 
    {
    try {
        const { name, email, password, role } = req.body;
        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.status(400).json({ 
                message: "User already exists" 
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });
        res.json({ message: "User registered successfully", user });
    } 
    catch (err) 
    {
        console.error(err);
    }
}

// Login user
exports.login = async (req, res) => 
    {
    try {
        const {email, password} = req.body;
        const oldUser = await User.findOne({ email });
        if (!oldUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        const checkPassword = await bcrypt.compare(password,oldUser.password);
        if(!checkPassword)
            {
             return res.status(401).json({
                 message:"Invalid password"
                });
        }

        const token = jwt.sign({ 
            id: oldUser._id,
            role: oldUser.role
         }, 
         process.env.JWT_SECRET
        );

        res.json({
            success: true,
            message: "User logged in successfully",
            token,
            user: {
                _id: oldUser._id,
                name: oldUser.name,
                email: oldUser.email,
                role: oldUser.role
            }
        });
    } 
    catch (err) 
    {
        console.error(err);
    }
}