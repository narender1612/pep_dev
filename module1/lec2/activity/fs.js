// fs is file system
const fs = require("fs"); // yeh fs ka object laake usko const fs main daal dega, taaki hum uske functions use kar sake,
//it's available in NodeJs

console.log(fs); // to see all the functions in fs

let trialKaData = fs.readFileSync("./trial.txt");
console.log(trialKaData + "");  // the eding "" is used to view the data in readable format, 
//remove it to see that data wont be readable

// instead of above we can also do this:
// let trialKaData = fs.readFileSync("./trial.txt" , "utf-8");
// here utf-8 does the same work as "" in line 7, it makes the data human readable


fs.writeFileSync("index.txt", "this file is created using writeFileSync function");