const Users=require('../models/userModel');
const Admins=require('../models/adminModel');
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const z = require('zod');

const emailValidate=z.string().email().refine((email)=>{
  return email.endsWith("@iitdh.ac.in");
});

const passwordValidate=z.string().min(8);

const userCtrl={
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

      const user=await Users.findOne({email});
      if(user)
        {
          
          return res.status(400).json({msg:"Email already registered"});
        }

        //hashing password
        const passwordHash=await bcrypt.hash(password,10);

        const newUser= new Users({
          name,email,password
        });
        await newUser.save();

       res.status(200).json({msg:"User registered"});




    } catch (error) {
      return res.json(500).json({msg:error.message});
    }
  },
  login:async(req,res)=>{

    try{
      const {email,password}=req.body;
      const user=await Users.findOne({email,password});
      console.log("hey");
      console.log(email);
      console.log(password);
      if(!user)
      {
        return res.status(404).send("User not Found");
      }
      res.cookie('user', JSON.stringify(user), { httpOnly: true, secure: false });
      res.status(200).json({success:true,user,});
      
      console.log("hey2");
      }catch(error)
    {
      res.status(400).json({
        success:false,
        error,
      });
      console.log(error);
  
    }

  }
  ,favorite:async (req, res) => {
    const { userId } = req.body;
    const { favoriteBooks } = req.body;
  
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).send('User not found');
      }
  
      user.cart.push(...favoriteBooks) ;
      await user.save();
      console.log(favoriteBooks)
      res.status(200).send('Favorite books updated successfully');
    } catch (error) {
      res.status(500).send('Error updating favorite books');
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await Users.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).send('Error fetching users');
    }
  }
}
module.exports=userCtrl;