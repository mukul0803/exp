const express = require('express');
const app = express();
const cors = require("cors");

app.set('view engine','ejs');

app.use(express.json());

app.use(cors());


app.get('/',(req,res)=> {
    console.log(__dirname);
    // res.render('index');
    res.render("/views/index.ejs");
    
});



app.listen(4000);
