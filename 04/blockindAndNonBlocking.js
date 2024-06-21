const fs = require("fs");

console.log(1);

//this is a blocking request. it will block a thread, get executed and the aage ka code will execute.
const result = fs.readFileSync('./contacts.txt', "utf-8");
console.log("This is a Blocking Req:");
console.log(result);

console.log(2);

//reading a file Asynchronously. this is a non-blocking request. it will not block a thread,  aage ka code will get executed and then this request will get executed.
fs.readFile('./contacts.txt', "utf-8",(err,result1)=>{
  if (err) {
    console.log("ERROR: ",err);
  } else {
    console.log("This is a Non-Blocking Req:");
    console.log(result1);
  }
});

console.log(3);
console.log(4);