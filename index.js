var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.json({ message: 'Hello World!' })
})

app.listen(3002, function () {
  console.log('Listening on port 3002...')
})
