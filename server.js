const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const routes = require('routes');

const app = express();
const log = console.log;
const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Uploader1_db', {
    useNewUrlParser:true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*',(req, res)=>{
        res.sendfile(path.join(__dirname,'client','build','index.html' ));
    })
}

app.listen(PORT, ()=> {
    log(`Server running on Port: ${PORT}`)
})