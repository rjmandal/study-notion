const mongoose = require("mongoose");
require("dotenv").config();

exports.connect =()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(()=> console.log("connected to mongoDB"))
    .catch(err =>console.error(`${err}. Could not connect to MongoDB`));
}