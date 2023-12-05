const express=require("express");
const connection = require("./config/db");
const userRouter = require("./router/userRouter");
const port=7785
const app=express();

app.use(express.json());

app.use("/api",userRouter)

app.listen(port,async()=>{
    try
    {
        connection();
        console.log("Server Run on Port No-7785");
    }
    catch
    {
        console.log("Some Error on Port No-7785");
    }
})