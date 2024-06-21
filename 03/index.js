const fs = require("fs");

// creating a file synchronously which means that is a blocking request
fs.writeFileSync("./testSync.txt","This is my new file which is created syncronously.");

// creating a file asynchronously which means that is a non-blocking request
fs.writeFile("./testASync.txt","This is my new file which is created Asyncronously.", (err)=()=>{});

//reading a file synchronously
const result = fs.readFileSync('./contacts.txt', "utf-8");
console.log(result);

//reading a file Asynchronously
fs.readFile('./contacts.txt', "utf-8",(err,result1)=>{
  if (err) {
    console.log("ERROR: ",err);
  } else {
    console.log(result1);
  }
});

//appending data in a file without overwriting on it:
//sync:
fs.appendFileSync("./testSync.txt","\nThis data is appended using appendFileSync.");