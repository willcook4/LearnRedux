var express = require('express');

// Create an app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

// Folder to server
app.use(express.static('public'));

// Port and listen
app.listen(PORT, function() {
  console.log('Express server is up on port: ' + PORT);
});