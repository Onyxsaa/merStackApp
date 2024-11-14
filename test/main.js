import mongoose from "mongoose";
import addUser from "./addUser.js";
import dotenv from "dotenv"

dotenv.config()

// MongoDB bağlantısı
mongoose.connect(process.env.dbUrl,).then(() => {
    console.log("MongoDB bağlantısı başarılı!");
}).catch((error) => {
    console.error("MongoDB bağlantı hatası:", error);
});

addUser("eren", "yılmaz", "45")