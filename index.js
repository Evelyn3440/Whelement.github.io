const express = require('express')
const app = express()
const path = require('path');
const port = 3000
var privateKey = fs.readFileSync( 'private_key.cem' );
var certificate = fs.readFileSync( 'certif.cem' );
// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.use(express.static('public'))
https.createServer({
    key: privateKey,
    cert: certificate
}, app).listen(port);
