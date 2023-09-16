const express = require('express');
const app = express();
const cors = require("cors");

app.set("views", path.join(__dirname, "..", "views"))
app.set('view engine','ejs');

app.use(express.json());

app.use(cors());


app.get('/',(req,res)=> {
    console.log(__dirname);
    // res.render('index');
    res.send(__dirname);
    
});



app.listen(4000);
