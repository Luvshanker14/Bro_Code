
const Admins=require('../models/adminModel');
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const z = require('zod');

const emailValidate=z.string().email().refine((email)=>{
  return email.endsWith("@iitdh.ac.in");
});

const passwordValidate=z.string().min(8);

const adminCtrl={
  register:async(req,res)=>{
    try {
      console.log("i am in register controller");
      const {name,email,password}=req.body;

      const eValidation=emailValidate.safeParse(email);
      const passValidation=passwordValidate.safeParse(password);
      if(!eValidation.success)
        {
          console.log("i am in email validation not validated");
          // res.send("Use your College EmailId to register");
          return res.status(400).json({ error: "Use your College EmailId to register" });
        }
        if(!passValidation.success)
          {
            console.log("i am in password validation not validated")
            // res.send("Password should have atleast 8 characters");
            return res.status(400).json({ error: "Password shoul have at least 8 characters" });
          }

      const admin=await Admins.findOne({email});
      if(admin)
        {
          
          return res.status(400).json({msg:"Email already registered"});
        }

        //hashing password
        const passwordHash=await bcrypt.hash(password,10);

        const newAdmin= new Admins({
          name,email,password
        });
        await newAdmin.save();

       res.status(200).json({msg:"Admin registered"});




    } catch (error) {
      return res.json(500).json({msg:error.message});
    }
  },
  login:async(req,res)=>{

    try{
      const {email,password}=req.body;
      const admin=await Admins.findOne({email,password});
     // console.log("hey");
      console.log(email);
      console.log(password);
      if(!admin)
      {
        return res.status(404).send("Admin not Found");
      }
      res.status(200).json({success:true,admin,});
      
      //console.log("hey2");
      }catch(error)
    {
      res.status(400).json({
        success:false,
        error,
      });
      console.log(error);
  
    }

  }

  
}
module.exports=adminCtrl;