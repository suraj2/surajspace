var express = require("express");
var app = express();

app.use(express.static(__dirname+'/../client'));
console.log(__dirname+'/client')
var port = 3000;
app.listen(port, function() {
        console.log("Listening on " + port);
});
