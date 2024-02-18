const express = require('express')
const app = express()
const path = require('path');
const port = 8000
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/crsh1tty', function(req, res) {
  res.sendFile(path.join(__dirname, '/crsh1tty/index.html'));
});
app.get('/favicon.svg',function(req, res) {
  console.log("You good bro?");
  res.sendFile(path.join(__dirname, 'whelement.svg'));
})
app.use(express.static('public'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

