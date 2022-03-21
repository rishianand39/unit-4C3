const express=require("express");

const router=express.Router()

const User=require("../models/user.model")
const upload=require("../middlewares/fileupload")
router.get("/",async(req,res)=>{
    try {
        const users=User.find().lean().exec();
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})


router.post("/",upload.any("avatar"),async(req,res)=>{
    try {
        const users=User.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            age:req.body.age,
            profileImages:req.file.path
            
        });
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})

module.exports=router