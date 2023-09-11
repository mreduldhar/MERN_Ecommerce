// Basic Library Import
const express =require('express');
const router =require('./src/routes/api');
require('dotenv').config();

const app = express();




// Security Middleware Library Import
const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');
const hpp =require('hpp');
const cors =require('cors');

// Database Library Import
const mongoose =require('mongoose');


// Security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())


// Parse JSON bodies
app.use(express.json({limit: '50mb'}));

// app.use(express.urlencoded({limit: '50mb'}));

// Parse URL-encoded bodies (extended is set to true)
app.use(express.urlencoded({extended: true}));


// Request Rate Limit
const limiter= rateLimit({ windowMs:15*60*1000, max:3000 })
app.use(limiter)

// Database Connection

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("Database Connected 😊",)
}).catch((err)=>{
    console.log("Database not Connected 😖")
})




// Route Implement
app.use("/api/v1",router)

// Undefined Route Implement
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
})



module.exports = app;