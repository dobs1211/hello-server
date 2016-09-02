var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send("Hello Friday!!");
});

app.listen(process.env.PORT || 8080, process.env.IP);