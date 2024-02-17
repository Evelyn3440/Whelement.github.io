const express = require('express')
const app = express()
const path = require('path');
const port = 8000
// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
// sendFile will go here
app.get('/crsh1tty', function(req, res) {
  res.sendFile(path.join(__dirname, '/crsh1tty/index.html'));
});
app.use(express.static('public'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

