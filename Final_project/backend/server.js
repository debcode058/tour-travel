const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectdb = require("./config/db");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectdb();
app.get("/",(req,res)=>{
    res.send("API is working");
});
app.use('/api/tours',require("./routes/tourRoutes"));
app.use('/api/auth',require("./routes/authroutes"));
app.use("/uploads", express.static("uploads"));
const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});