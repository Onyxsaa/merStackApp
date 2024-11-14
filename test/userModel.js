import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    surname: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        min: 0
    }
})

const User = mongoose.model("User", userSchema)

export default User