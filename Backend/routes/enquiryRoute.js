import express from "express";
import Enquiry from "../models/Enquiry.js";

const router = express.Router();

router.post("/enquiry", async (req,res)=>{
    try{
        const {name,email,phone} = req.body;

        if(!name || !email || !phone){
            return res.status(400).json({
                success:false,
                message:"All fields required"
            });
        }

        const enquiry = await Enquiry.create({
            name,
            email,
            phone
        });

        res.status(201).json({
            success: true,
            message: "Registration Successful",
            data: enquiry,
        });

    }

    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

});

export default router;