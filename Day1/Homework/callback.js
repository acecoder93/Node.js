// Rewrite the  normal functions below as a Callback function
// function add(x, y) {
//     var result = x + y; 
//     return result; 
//  } 

//  function subtract(x, y) { 
//     return x - y; 
//  } 

 
//  function greeting(person) { 
//     return 'Hola, ' + person + '!'; 
//  } 



 function product(numbers) { 
    return numbers.reduce(function(a, b) { 
       return a * b; 
    }, 1); 
 }


function product(numbers, callback){
    var result = numbers.reduce();

}

product


// Converted the functions above to Callback Functions (BELOW)
// Callback Functions

// ADD CALLBACK
//  function add (x, y, callback){
//     setTimeout(()=>{
//         var result = x + y;
//         callback(result);
//     }, 1000);
// }
// add(1, 2, (result) => {
//     console.log(result);
// })

// SUBTRACT CALLBACK
// function subtract(x, y, callback){
//     setTimeout (()=>{
//         var result = x - y;
//         callback(result);
//     }, 1500);
// }

// subtract(5, 3, (result)=>{
//     console.log(result);
// })

// GREETING CALLBACK
// function greeting(person, print){
//     var result = `Hola ${person}!`
//     print(result);
// }
// greeting('Jean', (result)=>{
//     console.log(result);
// } )