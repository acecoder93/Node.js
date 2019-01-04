// Writing Simple Modules Example (ES6 Syntax)

// Example 1
// var log = {
//     info : (info)=>{
//         console.log( `Info: ${info}`)
//     },
//     warning : (warning)=>{
//         console.log(`Warning: ${warning}`)
//     },
//     error : (error)=>{
//         console.log(`Error: ${error}`)
//     }      
// }
// module.exports =  log;

// Example 2
// module.exports = "hello world!"

// Example 3
// var message = "hello anuj";
// module.exports = message;

// Example 4
// module.exports.SimpleMessage = "hello world";

// Example 5
module.exports = function(msg){
    console.log(msg);
}

