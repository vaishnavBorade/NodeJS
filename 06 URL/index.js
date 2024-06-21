const http = require("http");
const url = require("url");

const myServer = http.createServer((req,res)=>{
  if (req.url === "/favicon.ico") return res.end(); 

  const myUrl = url.parse(req.url,true);
  console.log(myUrl.query)
  
  return res.end(JSON.stringify(myUrl.query));
})

myServer.listen(8000,()=>console.log("Server started at port 8000"));