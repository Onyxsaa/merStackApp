import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullName: {
        required: true,
        type: String
    }, email: {
        required: true,
        type: String
    }, password: {
        required: true,
        type: String
    }, userType: {
        type: String,
        enum: ["USER", "ADMİN"],
        default: "USER"
    }, numara: {
        type: String,
        required: true
    }
})

const User = mongoose.model("Users", UserSchema)

export default User