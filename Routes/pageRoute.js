const express = require("express")
const router = express.Router()
const BlogModel = require("../model/BlogModel")
const upload =require("../utils/Fileupload")
const user = require("../model/UserModel")

router.get("/", (req, res) => {
    if (!req.cookies.user) {
        res.redirect("/signin");
    }
    const user = req.cookies.user;
    res.render("index", {
        user: user
    })
})

router.get("/", async (req, res) => {
    try {

        res.render('ViewBlog');
    } catch (err) {
        res.status(500).send(err);
    }
})
router.get("/signin", (req, res) => {

    res.render("signin")
})
router.get("/signup", (req, res) => {
    res.render("signup")
})
router.get("/logout", (req, res) => {
    res.clearCookie("user")
    res.redirect("/signin")
})
router.get("/adddata", (req, res) => {
    res.render("AddBlog")
})
router.get("/view", async (req, res) => {
    const data = await BlogModel.find();
    res.render("ViewBlog", {
        data: data
    })
})

router.post("/delete/:id",async(req,res)=>{
    try {
        await BlogModel.findByIdAndDelete(req.params.id);
        res.redirect('/view');
      } catch (err) {
        res.status(500).send(err);
      }
})

  router.get('/update/:id', async (req, res) => {
    try {
      const item = await BlogModel.findById(req.params.id);
      res.render('UpdateData', { item });
    } catch (err) {
      res.status(500).send(err);
    }
  });
  router.post('/update/:id', upload.single('image') , async (req, res) => {
    try {
      const { name, desc, category } = req.body;
      console.log(req.body);
      const image=req?.file?.filename;
      await BlogModel.findByIdAndUpdate(req.params.id, { name, image, desc, category });
      res.redirect('/view');
    } catch (err) {
      res.status(500).send(err);
    }
  });


  router.get("/profile",async(req,res)=>{
    
  const user = req.cookies.user;
  res.render("profile", {
      user: user
  })
  })

  // upload your avtar
  // router.post('/upload', upload.single('avatar'), async (req, res) => {
  //   const avatar = req.file ? req.file.filename : 'default-avatar.png';
  //   const newUser = new user({
     
  //     avatar: avatar
  //   });
  //   await newUser.save();
  //   res.redirect('/');
  // });
  router.put('/upload/:id', upload.single('avtar') , async (req, res) => {
    try {
      // const avtar=req.file ? req.file.filename : 'default-avatar.png';
      const avtar=req?.file?.filename
      console.log(req?.file?.filename);
      // const image=req?.file?.filename;
      await user.findByIdAndUpdate(req.params.id, { avtar });
      res.redirect('/profile');
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
module.exports = router;