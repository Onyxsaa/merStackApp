
import mongoose from "mongoose";
import User from "./userModel.js";



const addUser = async (name, surname, age) => {
    const newUser = new User({
        "name": name,
        "surname": surname,
        "age": age
    })
    try {
        const savedUser = await newUser.save()
        console.log("Kullanıcı eklendi")
    } catch (error) {
        console.error(err)
    } finally {
        mongoose.disconnect()
        console.log("Bağlantı kapatıldı")
    }
    
    
}

export default addUser