const Express = require('express')
const app = new Express()
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended : false }));


app.get('/', function(req, res){
    res.sendFile(__dirname + "/views/index.html");
});

app.post('/send-profile/:name', function(req, res){

});