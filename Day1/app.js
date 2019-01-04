
// Example 1
// // Retreived "log.js" file
// var l = require('./log.js');
// l.error('this is an error'); // Used log variable from "log.js" sheet

// Example 2
// var hello = require('./log.js');
// console.log(hello);

// Example 3
// var hello = require('./log.js');
// console.log(hello);

// Example 4
// var h = require('./log.js');
// console.log(h.SimpleMessage);

// Example 5
// var m = require('./log.js');
// m('whats good yall');

// Example 3 - from "Class.js file"
var Per = require('./class.js');

var Anuj = new Per('Anuj');
Anuj.greeting();
var hiroko = new Per('hiroko');
hiroko.greeting();
var erick = new Per('erick');
erick.greeting();