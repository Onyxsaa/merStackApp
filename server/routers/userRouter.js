import mongoose from "mongoose";
import express from "express"
import bcrypt from "bcryptjs"
import User from "../models/userModel.js"
const router = express.Router()

router.post("/signup", async (req, res) => {
    try {
        const { fullName, email, password, numara } = req.body

        const userExists = await User.findOne({ email })
        if(userExists) {
            return res.status(400).json({ message: "User already exist" })
        }
    
        const hashedPass = await bcrypt.hash(password, 10)
    
        const createdUser = await User.create({
            "fullName": fullName,
            "email": email,
            "password": hashedPass,
            "numara": numara
        })
    
        return res.status(201).json({ createdUser })
    } catch (error) {
        console.error(error)
        return res.json({ message: "User creatation failed!" })
    }


})

export default router