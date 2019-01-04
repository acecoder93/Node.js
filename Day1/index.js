// Setting up server
// const http = require('http'); // Import Node.js core module
// var dt = new Date(); // Created a date object
// // Waiting on server for a request and response
// var server = http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-Type': 'text/html'}); 
//     res.write('the time and date is currently' + dt.toDateString());
//     res.end();

// });
// server.listen(5000); // Can use anything above 1000;
// console.log('Listening on port 5000')


// FileSystem Module (FS) --> to utilize this example, create a "test.js" file
// const  fs = require('fs');
// fs.unlink('./test.js', (err)=>{
//     if (err) throw err;
//     console.log(`successfully deleted test.js`)
// })

// FS Module
// const fs = require('fs');
// fs.readFile('./test.txt', (err, data)=>{
//     if (err){
//         console.log(error.message);
//         return;
//     }
//     console.log(`File Data: ${data.toString()} `)
// });

// FSModule to WriteFile
// const fs = require('fs');
// var fileName = 'ourFile.txt'
// fs.writeFile(fileName, 'ya\'ll projects are awesome', (error)=>{
//     if (error){
//         console.log(error.message);
//         return;
//     }
//     console.log(`File Saved to: ${fileName}`)
// });

// FS Read then Write (Reverse and Join)
// const fs = require('fs');
// var fileName = 'ourFile.txt';
// fs.readFile(fileName, function (error, buffer) {
//     if (error) {
//       console.error(error.message);
//       return;
//     }
//     var contents = buffer.toString();
//     var backwards = contents.split('').reverse().join('');
//     fs.writeFile(fileName, backwards, function (error) {
//       if (error) {
//         console.error(error.message);
//         return;
//       }
//       console.log('File Save: ', fileName);
//     });
// });

