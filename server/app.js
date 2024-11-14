import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRouter from "./routers/userRouter.js"

// dotenv config
dotenv.config()

// axpress app tanımlamaları
const app = express()
app.use(express.json())

app.use("/users", userRouter)

// app i çalıştırma

app.listen(3000, () => {
    console.log("server started at localhost:3000")
    mongoose.connect(process.env.dbUrl,).then(() => {
        console.log("MongoDB bağlantısı başarılı!");
    }).catch((error) => {
        console.error("MongoDB bağlantı hatası:", error);
    });
    
})