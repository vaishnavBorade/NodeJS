const express = require("express");
const http = require("http");

const app = express();

app.get("/",(req,res)=>{
  return res.end("Hello from home page");
})

app.get("/about",(req,res)=>{
  return res.end("Hello from about page");
})

app.listen(8000, ()=>console.log("Server Started at port 8000"));