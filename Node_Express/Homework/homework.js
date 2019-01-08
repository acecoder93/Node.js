// Express Exercises

var express = require('express');
var app = express();

app.get('/', (req, res)=>{
    res.send('Hello World!');
})
app.get('/cats?', (req, res)=>{
    res.send('Meow');
})
app.get('/dogs?', (req, res)=>{
    res.send('Woof');
})
app.get('/cats?_and_dogs?', (req, res)=>{
    res.send('Living Together');
})

app.get('/greet/:name', (req, res)=>{
    let name = req.param('name');
    res.send('Hello ' + name);
})

app.get('/yearage', (req, res)=>{
    let age = req.query.age;
    let date = new Date();
    let currentYear = date.getFullYear();
    let birthYear = currentYear - age;
    res.send(birthYear);
});


app.listen(5000, ()=>{
    console.log('Listening on Port 5000');

})