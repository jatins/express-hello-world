var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World! from app2 and ...')
})

app.listen(3002, function () {
  console.log('Listening on port 3001...')
})
