const { Schema, model } = require("mongoose");

 const SchemaFormat={
    type:String,
    required:true,
    trim:true,
    unique:true
 }

const userSchema= new Schema({
    name:{
        ...SchemaFormat
    },
    email:{
        ...SchemaFormat
    },
    mobile:{
     ...SchemaFormat
    },
    password:{
        ...SchemaFormat
    },
    avatar: { type: String, default: 'default-avatar.png' }
})
const user=model("UserCookie",userSchema)
module.exports=user;