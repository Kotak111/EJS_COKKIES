const express=require("express")
const app=express();
const path = require('path')

const pageRoute=require("./Routes/pageRoute");
const cookieParser = require("cookie-parser");
app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('views'))
app.use(express.static("public"))
app.use('/profile',express.static(path.join(__dirname, 'uploads')))
app.use("/profile", express.static('views/images'))
const port=3000;
require("./config/db")
app.use(cookieParser());
const UserRoute=require("./Routes/UserRoutes")
const BlogRoute=require("./Routes/BlogRoute");

app.use("/",pageRoute)
app.use("/api/user",UserRoute)
app.use("/api/blog",BlogRoute)


app.listen(port,()=>{console.log(`listen port number💕😍 ${port}`)})