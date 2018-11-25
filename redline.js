const fs = require('fs');
const rl = require('readline');

var inputPath = "./file.txt";
var inputStr = fs.createReadStream('./file.txt');
var r = rl.createInterface('inputStr');

rl
  .on('line' , (line)=>{
    console.log(line);
  })
  .on('close', () => {
      console.log(`Done reading file.`);
});
