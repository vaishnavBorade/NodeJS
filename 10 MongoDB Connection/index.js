//npm init
//npm i mongoose
//npm i express
//npm i nodemon
const db = require("./db");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my Hotel. This is /users GET api");
})

app.listen(8000, ()=>{
  console.log("Server is running")
})