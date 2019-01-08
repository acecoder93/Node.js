
const express = require(`express`); // Importing
var app = express(); // This part is apart of express documentation

app.use(express.static(`public`)) ;  // Middleware to create a static folder for files

// Creating the route
app.get(`/`,(req, res, next)=>{
    // res.send(`Hello World!`);
    req.msg = `hello world`;
    next();
},
(req, res, next)=>{
    req.msg += `this is a great day`;
    next();
}
(req,res)=>{
    res.send(req.msg);
});
// Route is localhost:3500/shoes
app.get(`/shoe`,(req, res)=>{
    var fname = req.param(`fname`);
    var lname = req.param(`lname`);
    res.send(`<h1>my name is ${lname} ${fname}</h1>);
});

// Creating Anuj Route
app.get(`/anuj`,(req, res)=>{
    res.send(`anuj is here`); // Always send something back on the route; otherwise the browswer will continue to load
});
// Other Page (Route)
app.get(`/page`,(req, res)=>{
    res.send(`other page`);
});
// HTML Page
app.get(`/myFile`,(req, res)=>{
    res.sendFile(`myFile.html`);
});

// Listening for request on port 3500 (Callback function below)
app.listen(3500, ()=>{
    console.log(`listening on port 3500`);
})