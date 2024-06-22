const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  return res.send("Welcome to the User API. Go to /users to see the user data.");
});

//sending data by creating html which can be only used by a browser. it is rendered in server side.
app.get("/api/users",(req,res)=>{
  return res.json(users);
})

//sending data in the form of JSON.
app.get("/users",(req,res)=>{
  const html = `
  <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>
  `;
  res.send(html);
})

//getting data of a specific user of ID "id"
app.get("/api/users/:id",(req,res)=>{
  const id = Number(req.params.id);
  const user = users.find((user)=>user.id===id);
  return res.json(user);
}) 



app.listen(PORT, () => console.log(`Server Started at Port: ${PORT}`))