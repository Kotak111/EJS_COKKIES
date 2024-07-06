const router=  require("express").Router()
const upload=require("../utils/Fileupload")

const blogCantoller=require("../controller/BlogController")
router.post("/",upload.single("image"),blogCantoller.create)
router.get("/",blogCantoller.index)
router.post("/delete/:id",blogCantoller.trash)
// router.patch("/update/:id",upload.single("image"),blogCantoller.update)
module.exports= router;