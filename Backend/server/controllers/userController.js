const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.signup = async (req,res)=>{

    try{

        const {fullName,mobile,email,password}=req.body;

        const userExist=await User.findOne({email});

        if(userExist){
            return res.status(400).json({
                message:"Email already exists"
            });
        }

        const hashedPassword=await bcrypt.hash(password,10);

        const user=new User({
            fullName,
            mobile,
            email,
            password:hashedPassword
        });

        await user.save();

        res.status(201).json({
            success:true,
            message:"Account Created Successfully"
        });

    }

    catch(err){

        res.status(500).json({
            success:false,
            message:err.message
        });

    }

};



exports.login=async(req,res)=>{

    try{

        const {email,password}=req.body;

        const user=await User.findOne({email});

        if(!user){

            return res.status(404).json({
                message:"User Not Found"
            });

        }

        const match=await bcrypt.compare(password,user.password);

        if(!match){

            return res.status(400).json({
                message:"Invalid Password"
            });

        }

        res.json({
            success:true,
            message:"Login Successful",
            user
        });

    }

    catch(err){

        res.status(500).json({
            success:false,
            message:err.message
        });

    }

};