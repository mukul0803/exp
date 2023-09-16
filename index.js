const express = require('express');
const app = express();
const cors = require("cors");

app.set('view engine','ejs');

app.use(express.json());

app.use(cors());


app.get('/',(req,res)=> {

    res.render('index');
    
});



app.listen(4000);