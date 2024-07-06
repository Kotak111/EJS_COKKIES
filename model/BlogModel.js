const { Schema, model } = require("mongoose");


  const SchemaFormat={
    type:String,
    trim:true,
    required:true
  }
const BlogModel= new Schema({
    name:{
        ...SchemaFormat
    },
    image:{
        type:String
    },
    desc:{
        ...SchemaFormat
    },
    category:{
      ...SchemaFormat
    }
})
const user=model("blogData",BlogModel)
module.exports=user;