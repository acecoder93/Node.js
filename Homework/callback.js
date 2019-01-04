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


function greeting ()
 
//  function product(numbers) { 
//     return numbers.reduce(function(a, b) { 
//        return a * b; 
//     }, 1); 
//  }

 // Callback Functions
 function add (x, y, callback){
    setTimeout(()=>{
        var result = x + y;
        callback(result);
    }, 1000);
}
add(1, 2, (result) => {
    console.log(result);
})

function subtract(x, y, callback){
    setTimeout (()=>{
        var result = x - y;
        callback(result);
    }, 1500);
}

subtract(5, 3, (result)=>{
    console.log(result);
})