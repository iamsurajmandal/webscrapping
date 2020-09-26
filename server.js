var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser({ limit: '5mb' }));
require('dotenv').config();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Headers"
    );
    next();
});
const port = process.env.SERVER_PORT
app.use(bodyParser.json({}))
app.use(bodyParser.urlencoded({ extended: true }))
require('./router')(app)
app.listen(port, (() => {
      console.log('server is running on', port)     
    }))

