
const BlogModel=require("../model/BlogModel")


exports.create = async (req,res)=>{
    try {
        const {name,desc,category}=req.body;
        const image =req?.file?.filename;

        console.log(req.file)
       
        const data=await BlogModel.create({
            name,desc,category,image
        })
        if(data){
            // const user=req.cookies.user;
            // res.status(200).render("index",{
            //     user:user
            // })
            res.redirect('/')
        }
        else{
            res.status(400).json({
                success:false,
                message:"data are not inserted"
            })
        }
    
    } catch (error) {
        
    }

    
}
exports.index= async (req,res)=>{
    try {
        const data = await BlogModel.find();
        res.render('ViewBlog', { data:data });
      } catch (err) {
        res.status(500).send(err);
      }
}
exports.trash = async (req,res)=>{
   try {
     const id=req.params.id;
     const data=await BlogModel.findByIdAndDelete(id)
     if(data){
         res.redirect("/View")
     }
   } catch (error) {
    
   }
}
exports.update =async (req,res)=>{
   try {
     const {name,desc,category}=req.body;
     const image =req?.file?.filename;
     const data=await BlogModel.findByIdAndUpdate({_id:id},{
         name,desc,categor,image
     })
     if(data){
         res.redirect("/view")
     }
   } catch (error) {
    
   }
}