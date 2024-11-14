
import mongoose from "mongoose";
import User from "./userModel.js";



const addUser = async (name, surname, age) => {

    try {
        const createduser = await User.create({
            "name": name,
            "surname": surname,
            "age": age
        })
        console.log("Kullanıcı Eklendi!")        
    } catch (error) {
        console.error(error)
        console.log("bokluk var")
    } finally {
        mongoose.disconnect()
        console.log("bağlantı Kapatıldı")
    }


}

export default addUser