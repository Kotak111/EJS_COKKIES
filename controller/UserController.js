const UserModel=require("../model/UserModel")


exports.signup =async(req,res)=>{
    const {name,email,mobile,password}=req.body;
    const avtar=req?.file?.filename;
    console.log(req.body);
    const user=await UserModel.create({
        name ,email,mobile,password,avatar
    })
    if(user){
       res.redirect("/signin")
    }
    else{
        res.json("wrong jayla")
    }
}
exports.signin=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await UserModel.findOne({email:email});
        if(!user){
            res.json("user not found")
        }
        const exitpass=await UserModel.findOne({password:password})
        if(!exitpass){
            res.json("password not match")
        }
        else{
            res.cookie("user",user,{httpOnly:true})
            res.redirect("/")
        }
    }
    catch(err){
        console.log(err);
    }
}