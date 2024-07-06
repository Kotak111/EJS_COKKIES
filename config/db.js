const { default: mongoose } = require("mongoose");

const db=mongoose.connect("mongodb://localhost:27017/cookies").then(()=>{
    console.log("database connect 💕😍");
}).catch((err)=>{
    console.log("database  not connect");
})
module.exports =db;