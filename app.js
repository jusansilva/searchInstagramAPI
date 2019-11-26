const Express = require('express')
const app = new Express()
var axios = require('axios')
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended : false }));
var token = ''


app.get('/', function(req, res){
    res.sendFile(__dirname + "README.md");
});

app.get('/send-profile/:name', function(req, res){
    var search = req.params.name;
    
    axios.get('https://api.instagram.com/v1/' + search + '/self/?access_token=' + token).than(function(params) {
        
    })

});