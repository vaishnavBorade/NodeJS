const http = require("http");
const fs = require("fs");

const d = new Date(0);

const myServer = http.createServer((req, res)=>{
  const log = `\nNew request received at: ${d}`

  fs.appendFile(`log.txt`, log, (err,data)=>{
    res.end('Hello!! from the Server side\n');
  })
});

myServer.listen(8000, ()=>console.log("Server Started!"));