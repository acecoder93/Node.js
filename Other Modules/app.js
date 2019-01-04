const request = require('request');
var url = 'https://nodejs.org/en/';


request.get(url, (err, response, html)=>{

    if (err){
        console.log(error.message);
        return
    }

    console.log(html);

})