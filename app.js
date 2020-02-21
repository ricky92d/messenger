const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static('public'));

var messageRoutes = require('./routes/messages')

app.get("/", function(req, res){
    res.sendFile("index.html");
});

app.use('/api', messageRoutes);

app.listen(3000, function(req, res){
    console.log("Console Running");
});



