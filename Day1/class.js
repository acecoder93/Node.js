// Example of timeout and asynchrounous JS / Node
// setTimeout(()=>{
//     console.log('hello erick')
// }, 1500);
// console.log('hello anuj');

// Callback Example using ES6 Syntax
// var friends = ['Hiroko', 'Erick', 'Phong', 'Anuj'];
// friends.forEach((eachName, index)=>{
//     console.log(`${index + 1}. ${eachName}`);
// })

// Callback Example #2
// function add(x, y, printFunc){
//     var result = x + y;
//     printFunc (result)
// }

// function print(result){
//     console.log(result)
// }
// add(3, 56, print);


// Example #3 - "Class"
class Person{
    constructor(name){
        this.name = name;
    }

    greeting(){
        console.log(`hello ${this.name}`);
    }
}

module.exports = Person;
