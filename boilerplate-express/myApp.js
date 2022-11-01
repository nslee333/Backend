let express = require('express');
let app = express();
require('dotenv').config();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
    (process.env.MESSAGE_STYLE  === "uppercase") 
        ? res.json({ "message": "HELLO JSON"})
        : res.json ({ "message": "Hello json"});
});

app.use(function(req, res, next) {
    
});

// for every request:
    // log to the console: 
































 module.exports = app;
