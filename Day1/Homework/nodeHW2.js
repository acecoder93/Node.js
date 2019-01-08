// // Read a File
// const fs = require('fs');
// var readline = require('readline');
// var fileName = 'file1.txt';

// fs.readFile(fileName, (error, success)=>{
//     if (error){
//         console.log(`This is an error.`);
//         return  
//     } 
//     var str = success.toString();
//     var upperForm = str.toUpperCase();

//     console.log (`File Data: ${upperForm} `)
//     return
// })

// DNS Lookup

// const dns = require('dns');


var fs = require('fs');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input file: ', function(inputFile) {
  rl.question('Output file: ', function(outputFile) {
    rl.close();
    fs.readFile(inputFile, function(err, buffer) {
      if (err) {
        console.log(err.message);
        return;
      }
      var content = buffer.toString();
      var upcased = content.toUpperCase();
      fs.writeFile(outputFile, upcased, function(err) {
        if (err) {
          console.log(err.message);
          return;
        }
        console.log('It worked.');
      });
    });
  });
});