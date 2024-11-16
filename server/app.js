import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRouter from "./routers/userRouter.js"
import cors from "cors"


// dotenv config
dotenv.config()

// axpress app tanımlamaları
const app = express()
app.use(express.json())
app.use(cors())


app.use("/users", userRouter)

// app i çalıştırma

app.listen(5000, () => {
    console.log("server started at localhost:3000")
    mongoose.connect(process.env.dbUrl,).then(() => {
        console.log("MongoDB bağlantısı başarılı!");
    }).catch((error) => {
        console.error("MongoDB bağlantı hatası:", error);
    });
    
})