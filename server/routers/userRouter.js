import mongoose from "mongoose";
import express from "express"
import bcrypt from "bcryptjs"
import User from "../models/userModel.js"
const router = express.Router()

router.post("/signup", async (req, res) => {
    try {
        const { fullName, email, password, numara } = req.body
        console.log(req.body)

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
    
        return res.status(201).json({ message: "SignUp Succesfull",createdUser })
    } catch (error) {
        console.error(error)
        return res.json({ message: "User creatation failed!" })
    }


})

router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body
        console.log(req.body)

        const user = await User.findOne({ email })
    
        if(!user)
            return res.status(400).json({message: "User does not exist"})
        
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if(!isPasswordCorrect)
            return res.status(400).json({ message: "Wrong password!" })
        return res.status(201).json({ message: "Login succesful", user })
    } catch (error) {
        console.error(error)
        return res.json({ message: error.message })
    }

})

export default router