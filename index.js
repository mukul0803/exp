const express = require('express');
const app = express();

app.set('view engine','ejs');

app.use(express.json());


app.use('/',(req,res)=> {

    // res.send("Hello");
    res.render('index');
    
});



app.listen(4000);
